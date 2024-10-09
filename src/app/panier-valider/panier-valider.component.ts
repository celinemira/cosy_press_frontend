import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-valider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './panier-valider.component.html',
  styleUrls: ['./panier-valider.component.css']
})
export class PanierValiderComponent implements OnInit {
  validatedCartItems: any[] = [];
  validatedTotalAmount: number = 0;
  orderId: string = ''; // Ajouter une propriété pour stocker l'ID de commande

  ngOnInit(): void {
    const storedCart = localStorage.getItem('validatedCart');
    const storedTotalAmount = localStorage.getItem('validatedTotalAmount');
    const storedOrderId = localStorage.getItem('orderId'); // Récupérer l'ID de commande

    if (storedCart) {
      this.validatedCartItems = JSON.parse(storedCart);
      localStorage.removeItem('validatedCart');
    }

    if (storedTotalAmount) {
      this.validatedTotalAmount = parseFloat(storedTotalAmount);
      localStorage.removeItem('validatedTotalAmount');
    }

    if (storedOrderId) { // Vérifier que storedOrderId est bien défini
      this.orderId = storedOrderId; // Assigner l'ID de commande à la propriété
      localStorage.removeItem('orderId'); // Nettoyer après récupération
    } else {
      console.error('Order ID non trouvé dans le localStorage');
    }
  }
}
