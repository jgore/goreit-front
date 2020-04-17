import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {OrderService} from '../../../services/order-service';
import {OrderResponse} from '../../../services/order-response.model';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  orderResponse: OrderResponse;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        console.log('route param id ' + params.id);
        this.orderService.getOrder(params.id).subscribe((orderResponse) => {
          console.log(orderResponse)
          this.orderResponse = orderResponse;
        });
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
