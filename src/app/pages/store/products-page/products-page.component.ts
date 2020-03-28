import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataServices} from '../../../data.services';
import {Observable} from 'rxjs';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',

})
export class ProductsPageComponent implements OnInit {


  public products$: Observable<Product[]>;
  constructor(
public data: DataServices
  ) { }

  ngOnInit(): void {
this.products$ = this.data.pegaProdutos();
//console.log(this.products$);
  }

}
