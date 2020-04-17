import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product-service';
import {ProductRequest} from '../product-list/product-request';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  onProductAdd(form: NgForm) {
    console.log(form);
    const values = form.value;
    const request = new ProductRequest(
      values.categoryName,
      values.title,
      values.text,
      values.price,
      values.quantity
    );
    this.productService.add(request)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
