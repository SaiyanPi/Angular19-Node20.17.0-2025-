import {Component, input, OnInit, output } from '@angular/core';
import { Product } from '../product'; // importing interface

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  // encapsulation: ViewEncapsulation.None // using None to allow global styles to apply
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

  constructor() {
    console.log('Product:', this.product());
  }

  ngOnInit(): void {
    console.log('Product:', this.product());
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


