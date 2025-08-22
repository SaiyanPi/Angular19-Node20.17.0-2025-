import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
// import { Subscription } from 'rxjs';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  selectedProduct: Product | undefined;

  products$: Observable<Product[]> | undefined;

  // Injecting services in the constructor:
  constructor(private productService: ProductsService) {}

  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

}
