import {Component, OnInit} from '@angular/core';
import {OrderResponse} from '../../services/order-response.model';
import {OrderService} from '../../services/order-service';
import {AuthenticationService} from '../../services/authentication-service';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  orderResponses: OrderResponse[];
  username: any;

  constructor(private orderService: OrderService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.username = this.authService.getUserLoggedIn();

    this.orderService
      .getOrderByUser(this.authService.getUserLoggedIn())
      .subscribe((orderResponses => {
        console.log(JSON.stringify(orderResponses));
        this.orderResponses = orderResponses;
      }));
  }


}
