import { Component, OnInit } from '@angular/core';
import {DropdownItem} from '../dropdown-item';
import {ProductDropdownItems} from './product-items';

@Component({
  selector: 'app-product-dropdown',
  templateUrl: './product-dropdown.component.html',
  styleUrls: ['./product-dropdown.component.less']
})
export class ProductDropdownComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getDropdownItems(): DropdownItem[] {
    return ProductDropdownItems;
  }

}
