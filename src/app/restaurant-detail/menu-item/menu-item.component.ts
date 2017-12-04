import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

import {MenuItem} from './menu-item.model'
// lembre sempre que tiver uma proprieda de o componente
// parent vai informar pra voce vc precisa marcá-la com
// um input ...


//EventEmitter e output esse cara vai trazer pra gente a agregação no carrinho...

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

@Input() menuItem: MenuItem;
@Output() add = new EventEmitter()//precisamos ter algum momento dentro do componetne pra permitir esse evento...
//ou seja dentro do proprio template vamos usar o <a (click)="emitAddEvent()"


// Como em aulas anterios...
// Vamos criar uma propriedade que represente um item do menu para que o meu Component parent que realmente tem os item
// passe para mim e eu consiga de fato popular o template... colocar os dados na tela.. que vem da api json..  no template
//agora precisamos trabalhar no template

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
    // ao fazer isso quando emitimos um evento dizendo aquele menuitem, no caso o browser nos returnarar tudo certinho acerca do item
    //que foi clicado meu
    // componente parent vai poder associar uma acao e fazer alguma coisa pra menuItemo meu
    //compnete interno nao precisa se preocupar com isso
    // ele so precisa cuidar da semantica do evento, ou seja, "aqlguem clicou no meu item adidionar"
    //estou aqui te notificando teu objet é tal e voce pode fazer alguma coisa.
    // Agora vamos pro compnt parent  fazer a busca e interar com o menuitem..
  }

}
