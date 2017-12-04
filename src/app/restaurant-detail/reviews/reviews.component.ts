import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

import {Observable} from 'rxjs/Observable'

import {RestaurantsService} from '../../restaurants/restaurants.service'


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

reviews: Observable <any>; //pode me retonar qualquer coisa, aqui o profe fez de um outra maneira(do deitail).. pra ver os pipes..
//nao vamos fazer o subscribe dentro do nginit, vamos deixar pro pipe fazer
constructor(private restaurantsService: RestaurantsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
     //da mesma forma que tinhamos this.route.snapshot.params['id'])
     //precisamos fazer aqui tb, mas note que aqui é uma 'subrrota', component filho.
     //dps vc altera o template
}

}
