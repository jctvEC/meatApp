import {CartItem} from './shopping-cart.model'
import {MenuItem} from './../menu-item/menu-item.model'
export class ShoppingCartService{
items: CartItem[];


clear(){
  this.items = []
}

total(): number{//vai retornar um number
  return 0;
}

addItem(item:MenuItem ){//vamos add um objeto q vem do menu

}

removeItem(item:CartItem){//removeremos um obj do carrinho

}


}
