import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';


@Injectable()
export class ProductViewService {

  constructor(private productService: ProductsService) {}

  private product: Product | undefined;

  getProduct(id: number): Product | undefined {
    const products = this.productService.getProducts()
    if(!this.product){
      this.product = products.find(product => product.id === id)
    }
    return this.product;
  }
}
