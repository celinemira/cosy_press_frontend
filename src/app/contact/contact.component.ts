import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import des modules nécessaires
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import pour les requêtes HTTP
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Correction : `styleUrl` doit être `styleUrls`
})
export class ContactComponent {
  contactForm: FormGroup; // Déclaration du formulaire

  constructor(private fb: FormBuilder, private http: HttpClient) {
    console.log('ContactComponent initialisé');
    // Initialisation du formulaire
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      this.http.post('http://127.0.0.1:8000/api/contacts', formData).subscribe(
        response => {
          console.log('Formulaire envoyé avec succès', response);
        },
        error => {
          console.error('Erreur lors de l\'envoi du formulaire', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}