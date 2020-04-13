import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../services/product-service';
import {Subscription} from 'rxjs';
import {OrderService} from '../../../services/order-service';
import {Orderline} from '../../../services/orderline.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  title: string;
  quantity = 4;
  price = 150;
  private mockUserId = 'MOCK_USER 1';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.title = params.title;
        console.log('route param id' + this.title);
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onOrderApproveClick() {
    console.log(`approve order product:${this.title}, and quantity: ${this.quantity}`);
    const productTitle = this.title;
    const amount = this.quantity;
    this.addOrder([{productTitle, amount}]);
  }

  addOrder(orderlines: Array<{ productTitle: string, amount: number }>) {
    this.orderService.addOrder(this.mockUserId, orderlines).subscribe(response => {
      console.log(response);
    });
  }

}
