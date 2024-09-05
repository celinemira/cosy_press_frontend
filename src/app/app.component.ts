import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PanierComponent } from './panier/panier.component';
import { PanierValiderComponent } from './panier-valider/panier-valider.component';
import { PrestationComponent } from './prestation/prestation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, CategoryComponent, ConnexionComponent, ContactComponent, EspaceUtilisateurComponent, InscriptionComponent,PageArticleComponent, PaiementComponent, PanierComponent, PanierValiderComponent, PrestationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cosy_press_frontend';
}
