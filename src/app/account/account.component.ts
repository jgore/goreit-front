import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderResponse} from '../services/order-response.model';
import {OrderService} from '../services/order-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private mockUserId = '1';
  orderResponses: OrderResponse[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService
      .getOrderByUser(this.mockUserId)
      .subscribe((orderResponses => {
        console.log(JSON.stringify(orderResponses));
        this.orderResponses = orderResponses;
      }));
  }

}
