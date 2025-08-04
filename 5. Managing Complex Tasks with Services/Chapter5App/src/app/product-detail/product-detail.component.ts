import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../product'; // importing interface

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',

})
export class ProductDetailComponent {

  product = input<Product>(); // input binding (product is an input property)

  added = output<Product>(); // output binding (added is an output property)

  addToCart() {
    this.added.emit(this.product()!); // emit the product when the button is clicked
  }

}


