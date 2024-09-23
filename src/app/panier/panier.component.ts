import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: true,
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  imports: [NgFor]
})
export class PanierComponent implements OnInit {
  cartItems: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = [JSON.parse(storedCart)];
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.total, 0);
  }
}
