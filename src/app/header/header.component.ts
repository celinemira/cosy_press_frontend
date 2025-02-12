import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {count} from "rxjs";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  numberOfItems: unknown|number = 0;

  cartService = inject(CartService);

  ngOnInit(): void {
    this.numberOfItems = this.cartService.loadSessionCart().length;
  }
}
