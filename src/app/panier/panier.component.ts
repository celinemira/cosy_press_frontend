import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  imports: [NgFor]
})
export class PanierComponent {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = [JSON.parse(storedCart)];
    }
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