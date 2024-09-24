import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {
  lavage: boolean = true;
  repassage: boolean = true;
  quantity: number = 1;
  unitPrice: number = 0; // Ce sera mis à jour avec les données de la catégorie
  depositDate: string = '';

  itemName: string = ''; // Nom de l'article
  itemImage: string = ''; // Image de l'article

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemName = params['name'];
      this.unitPrice = +params['price'];
      this.itemImage = params['img'];
    });
  }

  setOption(option: string, value: boolean): void {
    if (option === 'lavage') {
      this.lavage = value;
    } else if (option === 'repassage') {
      this.repassage = value;
    }
  }

  changeQuantity(amount: number): void {
    if (this.quantity + amount > 0) {
      this.quantity += amount;
    }
  }

  addToCart(): void {
    // Logique d'ajout au panier
    const cartItem = {
      name: this.itemName,
      lavage: this.lavage,
      repassage: this.repassage,
      quantity: this.quantity,
      total: this.quantity * this.unitPrice,
      date: this.depositDate,
      image: this.itemImage
    };
    localStorage.setItem('cart', JSON.stringify(cartItem));
    alert("Article ajouté au panier avec succès !");
  }
}
