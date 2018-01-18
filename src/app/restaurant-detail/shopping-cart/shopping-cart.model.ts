import {MenuItem} from './../menu-item/menu-item.model'

export class CartItem{//classe pro carrinho de compras
    constructor(public menuItem: MenuItem,
                public quantity: number = 1){}//se eu n falar nada ja vai ter valor de 1.


value(): number{//para somatizar os precos e qtds
  return this.menuItem.price * this.quantity;
}

                }
