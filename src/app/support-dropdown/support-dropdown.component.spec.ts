import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDropdownComponent } from './support-dropdown.component';

describe('SupportDropdownComponent', () => {
  let component: SupportDropdownComponent;
  let fixture: ComponentFixture<SupportDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
