//aula importante aula 46, subrotas e navegacao dentro de navegacao, divisao de componente em outros subscompnts.
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'//nos dias quais foram os parametros passados e a url passada
//note que no restaurants.component.ts nao usamos essa diretiva.

import{RestaurantsService} from '../restaurants/restaurants.service'
import {Restaurant} from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit { //esse cara é o parent, //nosso componente pai,

restaurant : Restaurant;//só querwemos um por vez.

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])//note sem o parentese
   .subscribe(restaurant => this.restaurant = restaurant)
 }//como vamos passar o id?
 //precisamos ter acesso a router que foi ativada!
 //para poder fazer consulta no momento do subscribe,
 // mas como so vamos acessar uma vez vamos usar o snapshot (como se fosse uma foto)!
// que  é como se fosse uma foto no momento do meu acesso de estao os estados dos meus parametros.
//params ´é um objeto que contem os valores dos meus parametros.
}
