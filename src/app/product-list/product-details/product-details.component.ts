import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  private mockUserId = 'mock user';
  private title: string;
  product: Product;
  private quantity: number;
  private paramsSubscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.title = params.title;
        this.getProduct(this.title);
        console.log('route param id' + this.title);
      });
  }

  getProduct(title: string) {
    this.productService
      .get(title)
      .subscribe((product) => {
        console.log('retrived product ' + product.toString());
        this.product = product;
      });
  }

  onCommentAdd(form: NgForm) {
    console.log(form);
    this.productService
      .addComent(this.mockUserId, this.title, form.value.text)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  onOrderBuyClick() {
    this.router.navigate([`produkt/zamowienie/${this.title}`]);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
