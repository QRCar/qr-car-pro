import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAmountComponent } from './chart-amount.component';

describe('ChartAmountComponent', () => {
  let component: ChartAmountComponent;
  let fixture: ComponentFixture<ChartAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
