import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  private destroyRef = inject(DestroyRef);

  // private productsSub: Subscription | undefined;

  // using inject keyword:
  // private productService = inject(ProductsService);

  selectedProduct: Product | undefined;

  // Injecting services in the constructor:
  constructor(private productService: ProductsService) {}

  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.getProducts();
  }

  // ngOnDestroy(): void {
  //   this.productsSub?.unsubscribe();
  // }

  private getProducts() {
    // this.productsSub = this.productService.getProducts().subscribe(products => {
    //   this.products = products;
    // });
    this.productService.getProducts().pipe( takeUntilDestroyed(this.destroyRef))
      .subscribe(products => {
      this.products = products;
    });
  }

}
