import {Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Product } from '../product'; // importing interface

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  // encapsulation: ViewEncapsulation.None // using None to allow global styles to apply
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if(!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Old value', oldValue);
      console.log('New value', newValue);
    }
  }

  product = input<Product>(); // input binding (product is an input property)
  // product = input.required<Product>();

  added = output<Product>(); // output binding (added is an output property)

  addToCart() { // method
    this.added.emit(this.product()!); // emit the product when the button is clicked
  }

  get productTitle() {
    return this.product()!.title;
  }
}


