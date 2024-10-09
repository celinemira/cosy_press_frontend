import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaiementService } from '../../services/paiement.service';
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  paiementForm!: FormGroup;
  totalAmount: number = 0;
  paymentErrorMessage: string | null = null;   // Simulation du paiement
  orderId: string = '';

  constructor(
    private fb: FormBuilder,
    private paiementService: PaiementService,
    private cartService: CartService,
    private router: Router 
  ) {
        // Initialisation du formulaire avec les validations nécessaires
        this.paiementForm = this.fb.group({
          cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
          expirationMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
          expirationYear: ['', [Validators.required, Validators.min(new Date().getFullYear())]],
          cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
          cardName: ['', Validators.required]
        });
        

    // Récupération du montant total du panier
    this.totalAmount = this.cartService.getTotalAmount();
  }


  // Générer un ID de commande unique
  generateOrderId(): string {
    const random = Math.floor(Math.random() * 10000); // Générer un nombre aléatoire
    const timestamp = new Date().getTime(); // Obtenir l'horodatage actuel
    return `#${timestamp}${random}`; // Combiner pour créer un ID unique
  }

onSubmit() {
  if (this.paiementForm.valid) {
    this.paymentErrorMessage = null; // Réinitialise le message d'erreur
    this.orderId = this.generateOrderId(); // Générer un ID de commande

    // console.log('Generated Order ID:', this.orderId); // Vérifier l'ID généré

    this.paiementService.processPayment(this.paiementForm.value).subscribe(
      response => {
        if (response.success) {
          // Stocker les données du panier dans localStorage ou via le service
          localStorage.setItem('validatedCart', JSON.stringify(this.cartService.getCartItems()));
          localStorage.setItem('validatedTotalAmount', this.totalAmount.toString());
          localStorage.setItem('orderId', this.orderId); // Stocker l'ID de commande

          // console.log('Order ID stored in localStorage:', localStorage.getItem('orderId')); // Vérifier le stockage

          this.cartService.clearCart();
          this.router.navigate(['/paniervalid']);
        } else {
          this.paymentErrorMessage = 'Erreur de paiement: ' + response.message;
        }
      },
      error => {
        this.paymentErrorMessage = 'Une erreur est survenue lors du paiement.';
      }
    );
  } else {
    this.paymentErrorMessage = 'Veuillez remplir correctement tous les champs.';
  }
}

  // Méthode pour le bouton Annuler
  onCancel() {
    this.router.navigate(['/panier']); // Navigation vers la page du panier
  }
}