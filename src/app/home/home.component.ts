import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //PROPIEDADES 
  web: boolean = false;
  seo: boolean = false;
  adwords: boolean = false;
  total: number = 0;


  //CONSTRUCTOR
  constructor() {
  }

  //METODOS
  ngOnInit(): void {
  }

  checkboxChange(e: Event) {
    console.log(e);
    console.log(`Estado= ${this.web} ${this.seo} ${this.adwords}`);
    this.total = 0;
    if (this.web) this.total += 500;
    if (this.seo) this.total += 300;
    if (this.adwords) this.total += 200;
  }

}
