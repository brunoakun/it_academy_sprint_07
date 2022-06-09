import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TarificadorService } from '../tarificador.service';
import { Presupuesto } from '../presupuesto.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  @Input() presup: Presupuesto | any;   // instead of any, specify your type

  formOpcionesWeb: FormGroup;

  constructor(
    private tarService: TarificadorService,
    private _builder: FormBuilder
  ) {
    this.formOpcionesWeb = this._builder.group({
      paginas: ['1', Validators.required],
      idiomas: ['1', Validators.required]
    })
  }

  //METODOS
  ngOnInit(): void {
  }

  calcular() {
    console.log(`Páginas ${this.presup.webPaginas} Idiomas ${this.presup.webIdiomas}`);
    this.tarService.calculaTotal(this.presup);
  }

  pags(op: string, num: number): void {
    if (op == '+') this.presup.webPaginas++;
    if (op == '-' && this.presup.webPaginas > 1) this.presup.webPaginas--;
    this.calcular();
  }
  idio(op: string, num: number): void {
    if (op == '+') this.presup.webIdiomas++;
    if (op == '-' && this.presup.webIdiomas > 1) this.presup.webIdiomas--;
    this.calcular();
  }



}
