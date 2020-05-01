import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../../product-list/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public title: string;
  private paramsSubscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.title = params.title;
        console.log('route param id ' + this.title);
      });
  }


}
