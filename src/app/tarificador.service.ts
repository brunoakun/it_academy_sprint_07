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
    // console.log(p);
    p.total = 0;

    if (p.web) {
      p.total += 500;
      p.total += (p.webPaginas * p.webIdiomas * 30);
    } else {
      p.webPaginas = 1;
      p.webIdiomas = 1;
    }
    if (p.seo) p.total += 300;
    if (p.adwords) p.total += 200;

    return (p);
  }

  guardaPresup(p: Presupuesto): void {
    let key = 'presup-' + p.id;
    localStorage.setItem(key, JSON.stringify(p));
  }


  borrarPresup(id:number): void { 
    let key = 'presup-' + id.toString();
    localStorage.removeItem(key);
  }


  recuperaPresup(id: number): Presupuesto {
    // console.log(p); 
    let key = 'presup-' + id;
    let p = localStorage.getItem(key); 
    return (JSON.parse(p));
  }

}
