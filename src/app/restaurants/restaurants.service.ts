import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

// para uma classe de service receber um poutro serv ico via inejecao de depednecia precisamos
// temos que marca la com umdecorator @Injectable, vc nao precisa do decator se ela nao vai acessar nenhum
// servico http, mas como vamos receber um outro servico,

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import{Observable} from 'rxjs/Observable'

import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from './../restaurant-detail/menu-item/menu-item.model'


import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {

 /*  rests: Restaurant[] = [

 note agora vamos receber de uma fonte http

    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png",
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",
    },
  ]
*/
    constructor (private http: Http){} //recebendo injecao do http abaixo consumimos nossa api rest (backend)

    restaurants(): Observable<Restaurant[]> { /*boiei nisso aqui Observable* aula 43 */
      return this.http.get(`${MEAT_API}/restaurants`)/*temos que mapiar nossa resposta pra pégar aquilo que somente queremos,
       nao rpecisamos de todos os dados entao usamos o map para tranformar o obj response no tipo que queremos uma array de restaurant*/
      .map(response => response.json())//aqui a requisicao nao foi feita ainda só com o subscribe la na page do component
      .catch(ErrorHandler.handleError)
    }
    /* template string ou interpolation string em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */

restaurantById(id: string) : Observable <Restaurant>{ //onte aqui, queremos só um para detalhar.
  return this.http.get(`${MEAT_API}/restaurants/${id}`)  //barra e id do recurso a api vai ter de retornar somente aqui dado.
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
}


reviewsOfRestaurant(id: string) : Observable <MenuItem[]>{ //onte aqui, queremos só um para detalhar.
//note aqui nao temos o tipo reviews, entao nao importar numa interface... classe...
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)  //é assim que o json-server vai conseguir indentificar que existe uma relacao
  //entre Restaurante e reviews
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
}


menuOfRestaurant(id: string) : Observable <any>{ //onte aqui, queremos só um para detalhar.
  return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)  //é assim que o json-server vai conseguir indentificar que existe uma relacao
  //entre Restaurante e reviews
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
}


}
