import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringTodaySeriesComponent } from './airing-today-series.component';

describe('AiringTodaySeriesComponent', () => {
  let component: AiringTodaySeriesComponent;
  let fixture: ComponentFixture<AiringTodaySeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiringTodaySeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiringTodaySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
