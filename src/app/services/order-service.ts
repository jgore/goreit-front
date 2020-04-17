import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {OrderResponse} from './order-response.model';
import {environment} from '../../environments/environment';

@Injectable()
export class OrderService {

  ORDER_URL = environment.API_URL + '/orders';

  constructor(private http: HttpClient) {
  }

  addOrder(userId, orderlines: Array<{ productTitle: string, amount: number }>): Observable<OrderResponse> {

    return this.http.post<OrderResponse>(this.ORDER_URL + '/add', {userId, orderlines});
  }

  getOrder(id: string): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.ORDER_URL}/${id}`);
  }

  getOrderByUser(id: string): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.ORDER_URL}/byUser/${id}`);
  }
}
