import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {OrderService} from '../../../services/order-service';
import {OrderResponse} from '../../../services/order-response.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  amount: number;
  title: string;
  private mockUserId = 'MOCK_USER 1';
  price: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.title = params.title;
        this.amount = params.amount;
        this.price = params.price;
        console.log('route param id' + this.title);
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onOrderApproveClick() {
    const productTitle = this.title;
    const amount = this.amount;
    this.addOrder([{productTitle, amount}]).subscribe((orderReponse) => {
      console.log(orderReponse);
      this.router.navigate(['produkt/zamowienie/', orderReponse.id]);
    });
  }

  addOrder(orderlines: Array<{ productTitle: string, amount: number }>): Observable<OrderResponse> {
    return this.orderService.addOrder(this.mockUserId, orderlines);
  }

}
