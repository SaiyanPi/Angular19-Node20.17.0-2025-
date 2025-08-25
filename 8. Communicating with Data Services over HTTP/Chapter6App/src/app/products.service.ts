import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product';
import { Observable, map, of } from 'rxjs';
import { APP_SETTINGS } from './app.settings';

@Injectable(
  // { providedIn: 'root' } //Environment/root Injectors
)
export class ProductsService {

  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  constructor( private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    const options = new HttpParams().set('limit', 10);
    return this.http.get<Product[]>(this.productsUrl, {
      params: options
    }).pipe(map(products => {
      this.products = products;
      return products;
    }));
  }

  private products: Product[] = [];

  getProduct(id: number): Observable<Product> {
    // return this.http.get<Product>(`${this.productsUrl}/${id}`);
    const product = this.products.find(p => p.id === id);
    return of(product!);
  }

  addProduct(newProduct: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, newProduct).pipe(
      map(product => {
        this.products.push(product);
        return product;
      })
    );
  }

}
