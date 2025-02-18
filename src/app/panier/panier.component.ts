import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import {cardItem} from "../model/card_item.model";

@Component({
  selector: 'app-panier',
  standalone: true,
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  imports: [NgFor]
})
export class PanierComponent {
  cartItems: cardItem[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = this.cartService.loadSessionCart();
  }

  // Calculer le total du panier
  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.total * item.quantity, 0);
  }

  // Méthode pour tester les événements
  someMethod(event: Event): void {
    if (event && event.target) {
      console.log('Event target:', event.target);
    } else {
      console.log('Event or target is undefined');
    }
  }

  // Stocker le panier et rediriger vers la page de paiement
  goToPayment() {
    this.cartService.setCartItems(this.cartItems);
    this.router.navigate(['/paiement']);
  }
}
