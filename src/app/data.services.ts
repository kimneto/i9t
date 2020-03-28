import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './models/product.model';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class DataServices {
  constructor(private http: HttpClient) {

  }
  pegaProdutos() {
    return this.http.get<Product[]>('http://127.0.0.1:3000/v1/products');
  }


}
