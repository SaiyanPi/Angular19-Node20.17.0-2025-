import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; // importing interface
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [SortPipe, AsyncPipe, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  // Injecting services in the constructor:
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

}
