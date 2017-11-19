import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../dropdown-item';
import { DropdownItems } from './priceItems';

@Component({
  selector: 'app-price-dropdown',
  templateUrl: './price-dropdown.component.html',
  styleUrls: ['./price-dropdown.component.less']
})
export class PriceDropdownComponent implements OnInit {
  dropdownItems: DropdownItem[];
  constructor() { }

  ngOnInit() {
    this.dropdownItems = DropdownItems;
  }
}
