import { Component } from '@angular/core';
import { Product } from '../product'; // importing interface
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 1500,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 2,
      title: 'Microphone',
      price: 4500,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 3,
      title: 'Web camera',
      price: 3500,
      categories: {
        1: 'Computing',
        2: 'Multimedia'
      }
    },
    {
      id: 4,
      title: 'Tablet',
      price: 45000,
      categories: {
        4: 'Entertainment'
      }
    }
  ];

  selectedProduct: Product | undefined;

  onAdded(stuff: Product) {
    alert(`Added ${stuff.title} to cart`);
  }


}
