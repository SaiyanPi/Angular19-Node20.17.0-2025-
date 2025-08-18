import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';


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

  constructor(private productService: ProductsService) {}

  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

}
