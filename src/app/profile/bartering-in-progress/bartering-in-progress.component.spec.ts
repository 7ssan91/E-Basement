import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarteringInProgressComponent } from './bartering-in-progress.component';

describe('BarteringInProgressComponent', () => {
  let component: BarteringInProgressComponent;
  let fixture: ComponentFixture<BarteringInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarteringInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarteringInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
