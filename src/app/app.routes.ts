import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { PanierValiderComponent } from './panier-valider/panier-valider.component';
import { PrestationComponent } from './prestation/prestation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'category', component:CategoryComponent},
    {path: 'article', component:PageArticleComponent},
    {path: 'login', component:ConnexionComponent},
    {path: 'user', component:EspaceUtilisateurComponent},
    {path: 'signin', component:InscriptionComponent},
    {path: 'panier', component:PanierComponent},
    {path: 'paiement', component:PaiementComponent},
    {path: 'paniervalid', component:PanierValiderComponent},
    {path: 'prestation', component:PrestationComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes), // Initialisation des routes
    HttpClientModule, // Ajout de HttpClientModule pour les requêtes HTTP
    ReactiveFormsModule // Ajout de ReactiveFormsModule pour les formulaires réactifs
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }