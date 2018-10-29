import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyProductComponent } from './app-my-product.component';

describe('AppMyProductComponent', () => {
  let component: AppMyProductComponent;
  let fixture: ComponentFixture<AppMyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
