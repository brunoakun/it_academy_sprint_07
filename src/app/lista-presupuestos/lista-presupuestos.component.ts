import { Presupuesto } from './../presupuesto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-presupuestos',
  templateUrl: './lista-presupuestos.component.html',
  styleUrls: ['./lista-presupuestos.component.css']
})
export class ListaPresupuestosComponent implements OnInit {

  // Decoradores
  @Input() presupuestos: Presupuesto[] = [];       // 4.- Definimos el decorador Input   para el ngFor

  constructor() { }

  ngOnInit(): void {
  }

  borraPresup(i: number): void {
    this.presupuestos.splice(i, 1);
  }

}
