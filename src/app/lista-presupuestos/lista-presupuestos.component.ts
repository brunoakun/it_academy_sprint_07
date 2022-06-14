import { Presupuesto } from './../presupuesto.model';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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

  filtro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borraPresup(id: number): void {

    const indice = this.presupuestos.findIndex(object => {
      return object.id === id;
    });

    Swal.fire({
      title: '¿Borrar?',
      text: `Presupuesto ${this.presupuestos[indice].nombre} de ${this.presupuestos[indice].total}€`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (indice > -1) this.presupuestos.splice(indice, 1);
      }
    });

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


  filtrar(evento: any) {
    if (!evento.target.value) {
      this.filtro = '';
    } else {
      this.filtro = evento.target.value;
    }
  }

  buscaPresup() {
    return this.presupuestos.filter(d => d.nombre.indexOf(this.filtro) >= 0);
  }

}

