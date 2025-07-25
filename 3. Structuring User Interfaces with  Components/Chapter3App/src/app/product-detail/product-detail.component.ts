import { Component, input } from '@angular/core';
import { Product } from '../product'; // importing interface

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = input<Product>(); // input binding (product is an input property)
  // product = input.required<Product>();
}
