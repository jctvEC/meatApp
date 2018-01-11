import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'

console.log(_.pad("TesteDeImportacaoDeBibliotecaJavaScript", 60, "=")) //olhar no console
//video aula secao 3 aula 15.

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
