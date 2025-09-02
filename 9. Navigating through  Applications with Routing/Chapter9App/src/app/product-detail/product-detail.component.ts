import { CommonModule } from '@angular/common';
import { Component, input, output, OnChanges } from '@angular/core';
import { Product } from '../product'; // importing interface
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',

})
export class ProductDetailComponent implements OnChanges{

  // product = input<Product>(); // input binding (product is an input property)

  id = input<number>();

  deleted = output();

  product$: Observable<Product> | undefined;

  added = output(); // output binding (added is an output property)

  // addToCart() {
  //   this.added.emit(this.product()!); // emit the product when the button is clicked
  // }
  addToCart() {
    this.added.emit();
  }

  constructor( private productService: ProductsService, public authService: AuthService ) { }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }


}


