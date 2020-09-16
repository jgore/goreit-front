import { Component, OnInit } from '@angular/core';
import {OrderResponse} from '../../services/order-response.model';
import {OrderService} from '../../services/order-service';
import {AuthenticationService} from '../../services/authentication-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.css']
})
export class BoughtComponent implements OnInit {

  orderResponses: OrderResponse[];
  username: any;

  constructor(private router: Router,
              private orderService: OrderService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.username = this.authService.getUserLoggedIn();

    this.orderService
      .getOrderByUser(this.authService.getUserLoggedIn())
      .subscribe((orderResponses => {
        this.orderResponses = orderResponses;
      }));
  }

  onSellerDetailsClick(sellerId: string) {
    this.router.navigate(['/konto/kupione/' + sellerId]);
  }


}
