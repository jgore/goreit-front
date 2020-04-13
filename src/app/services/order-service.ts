import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Orderline} from './orderline.model';
import {Order} from './order.model';
import {Injectable} from '@angular/core';

@Injectable()
export class OrderService {

  ORDER_URL = 'http://localhost:8080/orders/';

  constructor(private http: HttpClient) {
  }

  addOrder(userId, orderlines: Array<{ productTitle: string, amount: number }>): Observable<Order> {

    return this.http.post<Order>(this.ORDER_URL + 'add', {userId, orderlines});
  }
}
