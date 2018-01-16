import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  })
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]//nosso array com os dados, id, name, catrego, deliveryEstimate, rating, imagePath.
    // :[
    // {vamos jogar isso aqui nos servicos... estaticamente incialmente.. dps vamos acessar via o db.json
    //   "id": "bread-bakery",
    //   "name": "Bread & Bakery",
    //   "category": "Bakery",
    //   "deliveryEstimate": "25m",
    //   "rating": 4.9,
    //   "imagePath": "assets/img/restaurants/breadbakery.png",
    //   "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
    //   "hours": "Funcionaaa de segunda à sexta, de 8h às 23h"
    // },
    // {
    //   "id": "burger-house",
    //   "name": "Burger House",
    //   "category": "Hamburgers",
    //   "deliveryEstimate": "100m",
    //   "rating": 3.5,
    //   "imagePath": "assets/img/restaurants/burgerhouse.png",
    //   "about": "40 anos se especializando em trash food.",
    //   "hours": "Funciona todos os dias, de 10h às 22h"
    // },
  //poderiamos descorrer aqui mais nao é elegante, melhor fazermos um servico com uma requisicao http a um arquivo db.json



  constructor(private restaurantsService: RestaurantsService) { }//injetandoo servico de restaurant

  ngOnInit() {
     this.restaurantsService.restaurants() /*sub pega requisacao http é feita, chega, essa lista de rests é maepiada pra o json da resposta, um array de rest e pego o q eu receber e passar pro valor da minha propriedade vai ocrrer assicrono, o componente é instancias, as dependecias sao atribuidas (service)  */
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
