import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from '../product'; // importing interface
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',

})
export class ProductDetailComponent implements OnInit {

  id = input<number>();

  product$: Observable<Product> | undefined;


  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  addToCart() {

  }

  ngOnInit(): void {
    // this.product$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     return this.productService.getProduct(Number(params.get('id')));
    //   })
    // );

    // using snapshot property instead of observables
    const id = this.route.snapshot.params['id'];
    this.product$ = this.productService.getProduct(id);

  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}




