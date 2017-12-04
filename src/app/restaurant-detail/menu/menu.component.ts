import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

import{RestaurantsService} from '../../restaurants/restaurants.service'

import{MenuItem} from '../menu-item/menu-item.model'

import {Observable} from 'rxjs/Observable'


@Component({//principal do menu.. vamos pegar o RestaurantsService, ActivatedRoute e chamar o cara, pode
  //deixar pra faze o subscribemcomo ansync
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

menu: Observable <MenuItem[]>; //pode me retonar qualquer coisa, aqui o profe fez de um outra maneira(do deitail).. pra ver os pipes..
  //nao vamos fazer o subscribe dentro do nginit, vamos deixar pro pipe fazer
  constructor(private restaurantsService: RestaurantsService,
                  private route: ActivatedRoute) { }

      ngOnInit() {
        this.menu = this.restaurantsService
        .menuOfRestaurant(this.route.parent.snapshot.params['id'])
       //da mesma forma que tinhamos this.route.snapshot.params['id'])
       //precisamos fazer aqui tb, mas note que aqui é uma 'subrrota', component filho.
       //dps vc altera o template
  }

  addMenuItem(item: MenuItem){//só para vermos quem estamos pegando com o "adicionar, olhe no console"
    console.log(item)
  }
}
