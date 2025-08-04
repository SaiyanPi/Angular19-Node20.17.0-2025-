import { Component, OnInit, Inject, inject } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  // using inject keyword:
  private readonly productService = inject(ProductsService);

  selectedProduct: Product | undefined;

  // Injecting services in the constructor:
  // constructor(private productService: ProductsService) {
  //   this.productService = new ProductsService();
  // }

  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
