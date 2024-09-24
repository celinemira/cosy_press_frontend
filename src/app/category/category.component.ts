import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private router: Router) { }

  goToArticle(name: string, price: number, img: string): void {
    this.router.navigate(['/article', { name, price, img }]);
  }
}
