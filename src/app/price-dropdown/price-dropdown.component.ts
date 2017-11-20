import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../dropdown-item';
import { PriceDropdownItems } from './price-items';

@Component({
  selector: 'app-price-dropdown',
  templateUrl: './price-dropdown.component.html',
  styleUrls: ['./price-dropdown.component.less']
})
export class PriceDropdownComponent implements OnInit {
  dropdownItems: DropdownItem[];
  constructor() { }

  ngOnInit() {
    this.dropdownItems = PriceDropdownItems;
  }
}
