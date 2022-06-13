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

  ordenActual: string = '';
  icoFecha: string = '';
  icoNombre: string = '';
  ordenFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  borraPresup(i: number): void {
    this.presupuestos.splice(i, 1);
  }

  ordenaPresup(col: string) {

    const UP = 'bi bi-arrow-up-circle-fill';
    const DOWN = 'bi bi-arrow-down-circle-fill';

    this.icoFecha = '';
    this.icoNombre = '';

    if (col == 'nada') {
      this.presupuestos.sort((a, b) => (a.fecha > b.fecha) ? 1 : -1);
      return;
    }
    if (col == this.ordenActual) {
      this.presupuestos.reverse();
      this.ordenFlag = !this.ordenFlag;
    } else {
      if (col == 'nombre') this.presupuestos.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      if (col == 'fecha') this.presupuestos.sort((a, b) => (a.fecha > b.fecha) ? 1 : -1);
    }

    // Icono de orden en botón
    if (col == 'nombre') {
      this.icoNombre = UP;
      if (this.ordenFlag) this.icoNombre = DOWN;
    }
    if (col == 'fecha') {
      this.icoFecha = UP;
      if (this.ordenFlag) this.icoFecha = DOWN;
    }

    this.ordenActual = col;
  }



}
