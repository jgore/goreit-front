import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../product-list/product';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  PRODUCT_URL = 'http://localhost:8080/products/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.PRODUCT_URL);
  }

  get(title: string): Observable<Product> {
    return this.http
      .get<Product>(this.PRODUCT_URL + title);
  }

  addComent(userId: string, title: string, text: string): Observable<Product> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('title', title)
      .set('text', text);
    return this.http.post<Product>(this.PRODUCT_URL + 'comment', params);
  }


}
