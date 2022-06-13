import { Component, OnInit } from '@angular/core';
import { TarificadorService } from '../tarificador.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Presupuesto } from '../presupuesto.model';


import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
    private servTarificador: TarificadorService
  ) {
  }

  //METODOS
  ngOnInit(): void {
    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0, '', '');
  }

  checkboxChange(e: Event) {
    console.log(e);
    console.log(`Estado= ${this.presup.web} ${this.presup.seo} ${this.presup.adwords}`);
    this.servTarificador.calculaTotal(this.presup);
  }


  onSubmit() {
    // Hacer un push del presup al array de presupuestos

    this.presup.cliente = this.presupForm.value.cliente;
    this.presup.nombre = this.presupForm.value.nombrePresup;

    this.arrPresupuestos.push(this.presup);
    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0, '', '');

    // console.log(this.presupForm.value);
    // console.log(this.presup);
    console.log(this.presup);

  }

}
