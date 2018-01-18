//service idel para guardar os dados enquanto formos escolhendo.
//rever melhor essa aula 52
import {CartItem} from './shopping-cart.model'
import {MenuItem} from './../menu-item/menu-item.model'
export class ShoppingCartService{
items: CartItem[] = [];//criamos esse tipo de obj tem de instancia pq senao ler como undefined


  clear(){
    this.items = []
  }

  total(): number{//vai retornar um number
    return this.items
    .map(item => item.value())//troca de cardItem para um valor
    .reduce((prev, value) => prev + value, 0);//soma a qtd  + preco
  }

  addItem(item:MenuItem ){//vamos add um objeto q vem do menu
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id) //testar se o id é qual o do paramentro se forma
    if(foundItem){//se ja tem so incremento a qtd
        foundItem.quantity = foundItem.quantity + 1
    }else{
        this.items.push(new CartItem(item))
    }
  }

  removeItem(item:CartItem){//removeremos um obj do carrinho
        this.items.splice(this.items.indexOf(item),1)
  }


}
