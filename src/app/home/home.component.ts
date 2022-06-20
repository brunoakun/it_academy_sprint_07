import { Component, OnInit } from '@angular/core';
import { TarificadorService } from '../tarificador.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Presupuesto } from '../presupuesto.model';


import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //PROPIEDADES 
  nombre: string = '';
  cliente: string = '';
  web: boolean = false;
  seo: boolean = false;
  adw: boolean = false;
  paginas: number = 1;
  idiomas: number = 1;
  presup!: Presupuesto;

  presupForm = this._formBuilder.group({
    nombre: ['', Validators.required],
    cliente: ['', Validators.required],
    web: [false],
    seo: [false],
    adw: [false],
    paginas: [1],
    idiomas: [1]
  });


  arrPresupuestos: Presupuesto[] = [];

  //CONSTRUCTOR
  constructor(
    private _formBuilder: FormBuilder,
    private servTarificador: TarificadorService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
  }

  //METODOS
  ngOnInit(): void {

    // Cargar valores de url
    this.rutaActiva.queryParams
      .subscribe(params => {
        console.log(params); // { json de parámetros URL }       
        this.web = (params['web'] === 'true');   // de string a booleano:
        this.seo = (params['seo'] === 'true');
        this.adw = (params['adw'] === 'true');
        this.nombre = params['nombre'];
        this.cliente = params['cliente'];
        this.paginas = params['paginas'];
        this.idiomas = params['idiomas'];
      });

    this.presup = new Presupuesto(this.web, this.seo, this.adw, this.paginas, this.idiomas, 0, this.nombre, this.cliente);
    this.checkboxChange();
  }

  checkboxChange() {
    this.servTarificador.calculaTotal(this.presup);
    this.setUrlParametros();
  }


  onSubmit() {
    this.servTarificador.guardaPresup(this.presup);
    this.cargaDatosForm();

    // Hacer un push del presup al array de presupuestos
    this.presup.fecha = new Date();
    this.arrPresupuestos.push(this.presup);

    this.web = false;
    this.seo = false;
    this.adw = false;

    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0, '', '');
  }

  cargaDatosForm() {
    this.presup.cliente = this.presupForm.value.cliente;
    this.presup.nombre = this.presupForm.value.nombre;
    this.presup.web = this.presupForm.value.web;
    this.presup.seo = this.presupForm.value.seo;
    this.presup.adwords = this.presupForm.value.adw;
    this.presup.webPaginas = this.presupForm.value.paginas;
    this.presup.webIdiomas = this.presupForm.value.idiomas;
  }


  // Modificar parámetros de la URL con los datos del objeto actual
  public setUrlParametros() {
    console.log("setUrlParametros" + JSON.stringify(this.presup));

    const queryParams: Params = {
      web: this.presup.web,
      seo: this.presup.seo,
      adw: this.presup.adwords,
      cliente: this.presup.cliente,
      nombre: this.presup.nombre,
      paginas: this.presup.webPaginas,
      idiomas: this.presup.webIdiomas
    };

    this.router.navigate(
      [],
      {
        relativeTo: this.rutaActiva,
        queryParams: queryParams
      });
  }



  editPresup(p: Presupuesto) {
    //Recuperar datos del presupuesto enviado desde el hijo (lista-presupuestos.ts)
   // alert("Desde el padre id: " + p.id);

    for (let i = 0; i < this.arrPresupuestos.length; i++) {
      let id = this.arrPresupuestos[i].id;
      if (id == p.id) {
        let pr = this.servTarificador.recuperaPresup(p.id);
        this.presup = new Presupuesto(pr._web, pr._seo, pr._adwords, pr._webPaginas, pr._webIdiomas, pr._total, p.nombre, p.cliente, pr.fecha);
        //   alert(" this.presup = id->" + p.id + JSON.stringify(this.presup));
        this.arrPresupuestos.splice(i, 1);
        this.servTarificador.borrarPresup(p.id);
      }
    }

  }



}
