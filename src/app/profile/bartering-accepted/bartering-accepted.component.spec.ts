import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarteringAcceptedComponent } from './bartering-accepted.component';

describe('BarteringAcceptedComponent', () => {
  let component: BarteringAcceptedComponent;
  let fixture: ComponentFixture<BarteringAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarteringAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarteringAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
