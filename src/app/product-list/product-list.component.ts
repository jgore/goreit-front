import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product-service';
import {Product} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(apiProducts => {
        this.products = apiProducts;
      });
  }

  onTitleClick(title: string) {
    this.router.navigate(['/produkt/' + title]);
  }

}
