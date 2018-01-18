//classes usadas para injetar em componentes e em outros servicos, usado pra "encapsular" o acesso a api do backend
// para uma classe de service receber um poutro serv ico via inejecao de depednecia precisamos
// temos que marca la com um decorator @Injectable, vc nao precisa do decator se ela nao vai acessar nenhum
// servico http, mas como vamos receber um outro servico,
//sao tambem "singletons", ou seja "seguram" dados compartilhados para toda a aplicacao.
//3 escopos:
//1providers o modulo raiz ngmodule.
//2 componetes e componentes e filhos. somente a eles..
//3viewproviders somente ao componentes os filhos entao
//servicos tambem podem solicitar servicos de outros servicos para devem usar o decorator @Injectable
//Mas esse Injectable NAO É NECESSARIO PARA QUE SEU SERVICO SEJA INJETADO EM OUTRO OBJ, apenas para receber injecos
//pode ser criado pelo angular-cli

import {Injectable} from '@angular/core'//precisa desse cara pro servico
import {Http} from '@angular/http'//precisa desse cara pro servico receebr um http no caso

import{Observable} from 'rxjs/Observable'//api http so returna em obsvble
import 'rxjs/add/operator/map'//fazer a transformacao do dado
import 'rxjs/add/operator/catch'//tratar erros.

import {Restaurant} from './restaurant/restaurant.model'
import {MenuItem} from './../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api' //criamos essa constante, para se quisermos modificar dps alguma porta, seu o que for nao temos tantos problemas.
import {ErrorHandler} from '../app.error-handler'//nosso metodo

@Injectable()//vamos receber algo
export class RestaurantsService {

  /*  rests: Restaurant[] = [

  note agora vamos receber de uma fonte http, entao vamos comentar esse "array"

  {
  id: "bread-bakery",
  name: "Bread & Bakery",
  category: "Bakery",
  deliveryEstimate: "25m",
  rating: 4.9,
  imagePath: "assets/img/restaurants/breadbakery.png",
  },
...... teria la no metodo restaurants() somente um return this.restaurantsService.rests;
*/
constructor (private http: Http){} //recebendo injecao do http abaixo consumimos nossa api rest (backend)

  restaurants(): Observable<Restaurant[]> { /*boiei nisso aqui Observable* aula 43 */ //vai retornar um arry de compoentes, todo metodo da api http retornam um "observable" precisamos colocar o restaurant dentro dele..
  //ibservable é um obj da biblioteca rxjs,
      return this.http.get(`${MEAT_API}/restaurants`)/*"comsumindo nossa api", temos que mapiar nossa resposta pra pégar aquilo que somente queremos,
      nao rpecisamos de todos os dados entao usamos o map para tranformar o obj response no tipo que queremos uma array de restaurant*/
      .map(response => response.json())//aqui a requisicao nao foi feita ainda só com o subscribe la na page do component, esse map é so pra mapear a respsota que vem em obsvble<response> para obsvble<array de restaurantres>. mapeando pro nossoa arquivo json.s
      .catch(ErrorHandler.handleError)// ler sobre em app.error-handler.ts, colocamos nesse arquivos pois replacaremos ela em varios pontos.
      //Esse cara espera uma funcao, que recebe um response, e devolve um outro observable, se rolar um erro, o obsvble será "fechado"
      //se colocarmos ali no return /restaurants1 vai dar um erro, como verificado no console de page nao encontrada. Poderia ser criado um component para mostra essas mensagens de erro ao inves de só no console.
      // Maiores informacaoes de tipos de erro: https://wiki.infolink.com.br/C%C3%B3digo_de_Erros_HTTP
  }
  /* template string ou interpolation string em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */

  restaurantById(id: string) : Observable <Restaurant>{ //onte aqui, queremos só um para detalhar. chamada para o RestaurantDetailComponent
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
