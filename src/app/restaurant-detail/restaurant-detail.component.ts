import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

import{RestaurantsService} from '../restaurants/restaurants.service'

import {Restaurant} from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit { //esse cara é o parent, //nosso componente pai,

restaurant : Restaurant;

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])//note sem o parent
   .subscribe(restaurant => this.restaurant = restaurant)
 }//como vamos passar o id?
 //precisamos ter acesso a router que foi ativada!
 //para poder fazer consulta no momento do subscribe,
 // mas como so vamos acessar uma vez vamos usar o snapshot!
// que  é como se fosse uma foto no momento do meu acesso de estao os estados dos meus parametros.
//params ´é um objeto que contem os valores dos meus parametros.
}
