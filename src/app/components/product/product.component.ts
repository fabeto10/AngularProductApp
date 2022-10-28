import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../app/models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
