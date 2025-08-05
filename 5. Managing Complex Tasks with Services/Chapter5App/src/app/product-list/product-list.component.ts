import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, FavoritesComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  // using inject keyword:
  private readonly productService = inject(ProductsService);

  selectedProduct: Product | undefined;

  // Injecting services in the constructor:
  // constructor(private readonly productService: ProductsServic12e) {}


  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
