import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  })
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]



  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
     this.restaurantsService.restaurants() /*sub pega requisacao http é feita, chega, essa lista de rests é maepiada pra o json da resposta, um array de rest e pego o q eu receber e passar pro valor da minha propriedade vai ocrrer assicrono, o componente é instancias, as dependecias sao atribuidas (service)  */
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
