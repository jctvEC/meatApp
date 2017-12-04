import { Component, OnInit, Input} from '@angular/core';

import {Restaurant} from './restaurant.model'
//vamos aqui fazer usdo do model, entao o input é pradizer que vamos receber algo...
//nesse caso a estrutura da interface..


@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',

})
export class RestaurantComponent implements OnInit {

@Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
