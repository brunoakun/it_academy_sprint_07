import { Component, OnInit } from '@angular/core';
import { TarificadorService } from '../tarificador.service';
import { Presupuesto } from '../presupuesto.model';
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


  //CONSTRUCTOR
  constructor(private servTarificador: TarificadorService) {
  }

  //METODOS
  ngOnInit(): void {
    this.presup = new Presupuesto(this.web, this.seo, this.adw, 1, 1, 0)
  }

  checkboxChange(e: Event) {
    console.log(e);
    console.log(`Estado= ${this.presup.web} ${this.presup.seo} ${this.presup.adwords}`);
    this.servTarificador.calculaTotal(this.presup);
  }

}
