import { Injectable } from '@angular/core';
import { Presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})


export class TarificadorService {

  //PROPIEDDES

  //CONSTRUCTOR
  constructor() { }

  //METODOS
  calculaTotal(p: Presupuesto): Presupuesto {
    console.log(p);
    p.total = 0;
    
    if (p.web) {
      p.total += 500;
      p.total += (p.webPaginas * p.webIdiomas * 30);
    }
    if (p.seo) p.total += 300;
    if (p.adwords) p.total += 200;

    return (p);
  }
}
