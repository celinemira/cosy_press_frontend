import {Component, inject} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {cardItem} from "../model/card_item.model";
import {order} from "../model/order.model";

@Component({
  selector: 'app-espace-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './espace-utilisateur.component.html',
  styleUrl: './espace-utilisateur.component.css'
})
export class EspaceUtilisateurComponent {
  orders: any|order[];

  orderService = inject(OrderService);

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders
    });
  }
}
