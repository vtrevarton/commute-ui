import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsScreenComponent } from './flight-details-screen.component';

describe('FlightDetailsScreenComponent', () => {
  let component: FlightDetailsScreenComponent;
  let fixture: ComponentFixture<FlightDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
