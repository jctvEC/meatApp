// primeira coisa aqui é que vc vai configurar esse error handler e pode colocar ele de modo global no modulo raiz
// como um provider. da aplicacao. como foi feito com restaurantsService, ou, o outro modo seria utilizar o operador catch
// de observable, que  objetivo dessa classe. A gente importa lá no nosso arquivo restaurants.service.ts pois usaremos lá.


import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
 //Observable<response>
export class ErrorHandler {
    static handleError(error: Response | any){//metodo para descobrir o erro, nos mostra isso abaixo
      let errorMessage: string;
      if(error instanceof Response){
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
      }else{
        errorMessage = error.toString();
     }
     console.log(errorMessage);
     return Observable.throw(errorMessage)

  }
}
