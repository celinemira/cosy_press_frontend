import {Injectable} from '@angular/core';
import {cardItem} from "../app/model/card_item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: cardItem[] = [];
  private totalAmount: number = 0;

  // Stocker les éléments du panier
  setCartItems(items: cardItem[]) {
    this.cartItems = items;
    this.calculateTotal();
  }

  addCartItem(item: any) {
    let found = false;
    this.cartItems.map((row) => {
      if (row.name === item.name) {
        row.quantity = item.quantity;
        found = true;
      }
    });
    if (!found) {
      this.cartItems.push(item);
    }
    this.calculateTotal();
  }

  // Récupérer les éléments du panier
  getCartItems() {
    return this.cartItems;
  }

  // Calculer le total du panier
  private calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.total * item.quantity, 0);
  }

  // Récupérer le total du panier
  getTotalAmount() {
    return this.totalAmount;
  }

  // Méthode pour vider le panier
  clearCart() {
    this.cartItems = [];
    this.totalAmount = 0;
  }

  loadSessionCart(): cardItem[]
  {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }

    return this.cartItems;
  }
}
