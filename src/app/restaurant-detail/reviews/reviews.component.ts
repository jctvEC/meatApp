import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //pois precisamos pegar o paramentro daquilo q foi clicado do que nos queremos mostrar
import {Observable} from 'rxjs/Observable'

import {RestaurantsService} from '../../restaurants/restaurants.service'


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
//vamos so pegar uma referencia pro retorno do metodo do nosso servico aula 50.
reviews: Observable <any>; //pode me retonar qualquer coisa, aqui o profe fez de um outra maneira(do deitail).. pra ver os pipes..
//nao vamos fazer o subscribe dentro do nginit, vamos deixar pro pipe fazer
constructor(private restaurantsService: RestaurantsService,  private route: ActivatedRoute) { } //essa seg var route importante pra a gente captar o q foi selecioado. 

    ngOnInit() {
      this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
     //da mesma forma que tinhamos this.route.snapshot.params['id'])
     //precisamos fazer aqui tb, mas note que aqui é uma 'subrrota', component filho.
     //dps vc altera o template
}

}
