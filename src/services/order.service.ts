import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {order} from "../app/model/order.model";

@Injectable({providedIn: 'root'})
export class OrderService {
  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<order[]> {
    let jwt = JSON.parse(<string>localStorage.getItem('jwt'));
    console.log(jwt.token);
    return this.http.get<order[]>(`/api/orders`, {headers: {'Authorization': `Bearer ${jwt.token}`}});
  };
}
