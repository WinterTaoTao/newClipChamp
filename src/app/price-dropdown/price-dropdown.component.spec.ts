import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDropdownComponent } from './price-dropdown.component';

describe('PriceDropdownComponent', () => {
  let component: PriceDropdownComponent;
  let fixture: ComponentFixture<PriceDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
