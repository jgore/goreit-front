import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../services/category-service';
import {Product} from "../product-list/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product-service";
import {Category} from "../services/category-model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories: Category[] = [];

  constructor(private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(apiCategories => {
        this.categories = apiCategories;
      });
  }

  onCategoryClick(name: string) {
    this.router.navigate(['/kategoria/' + name]);
  }

}
