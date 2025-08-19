import { Component, inject } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent {

  // products: Product[] = [];
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: []
  });

  selectedProduct: Product | undefined;

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

}
