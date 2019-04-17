import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSearchPageComponent } from './address-search-page.component';

describe('AddressSearchPageComponent', () => {
  let component: AddressSearchPageComponent;
  let fixture: ComponentFixture<AddressSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
