import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  processPayment(paymentDetails: any): Observable<any> {
    // Simuler une réponse de succès pour le test
    return of({
      success: true, // ou false en cas d'échec
      message: "Paiement effectué avec succès !" // Message en cas de succès ou d'erreur
    });
  }
}  