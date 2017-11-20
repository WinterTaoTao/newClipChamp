import { Component, OnInit } from '@angular/core';
import {DropdownItem} from '../dropdown-item';
import {SupportDropdownItems} from './support-items';

@Component({
  selector: 'app-support-dropdown',
  templateUrl: './support-dropdown.component.html',
  styleUrls: ['./support-dropdown.component.less']
})
export class SupportDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDropdownItems(): DropdownItem[] {
    return SupportDropdownItems;
  }
}
