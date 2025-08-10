import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable(
  // { providedIn: 'root' } //Environment/root Injectors
)
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return[
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
  }


}
