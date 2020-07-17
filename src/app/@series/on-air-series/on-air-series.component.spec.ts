import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAirSeriesComponent } from './on-air-series.component';

describe('OnAirSeriesComponent', () => {
  let component: OnAirSeriesComponent;
  let fixture: ComponentFixture<OnAirSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnAirSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnAirSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
