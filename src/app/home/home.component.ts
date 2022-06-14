import { Component, OnInit } from '@angular/core';
import { TarificadorService } from '../tarificador.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Presupuesto } from '../presupuesto.model';


import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //PROPIEDADES 
  web: boolean = false;
  seo: boolean = false;
  adw: boolean = false;
  presup!: Presupuesto;

  presupForm = this._formBuilder.group({
    nombrePresup: ['', Validators.required],
    cliente: ['', Validators.required]
  });


  arrPresupuestos: Presupuesto[] = [];

  //CONSTRUCTOR
  constructor(
    private _formBuilder: FormBuilder,
    private servTarificador: TarificadorService,
    private route: ActivatedRoute
  ) {
  }

  //METODOS
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { json de parámetros URL }       
        this.web = (params['web'] === 'true');   // de string a booleano:
        this.seo = (params['seo'] === 'true');
        this.adw = (params['adw'] === 'true');
      });

    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0, '', '');
    this.checkboxChange();
  }

  checkboxChange() {
    console.log(`Estado= ${this.presup.web} ${this.presup.seo} ${this.presup.adwords}`);
    this.servTarificador.calculaTotal(this.presup);
  }


  onSubmit() {
    // Hacer un push del presup al array de presupuestos

    this.presup.cliente = this.presupForm.value.cliente;
    this.presup.nombre = this.presupForm.value.nombrePresup;

    this.presup.fecha = new Date();

    this.arrPresupuestos.push(this.presup);
    this.web = false;
    this.seo = false;
    this.adw = false;
    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0, '', '');
    this.checkboxChange();

    // console.log(this.presupForm.value);
    // console.log(this.presup);
    console.log(this.presup);

  }

}
