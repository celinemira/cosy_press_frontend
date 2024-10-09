import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private totalAmount: number = 0;

  // Stocker les éléments du panier
  setCartItems(items: any[]) {
    this.cartItems = items;
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
}
