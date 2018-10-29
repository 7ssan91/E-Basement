import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarteringRefusedComponent } from './bartering-refused.component';

describe('BarteringRefusedComponent', () => {
  let component: BarteringRefusedComponent;
  let fixture: ComponentFixture<BarteringRefusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarteringRefusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarteringRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
