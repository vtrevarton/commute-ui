import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFlightsScreenComponent } from './find-flights-screen.component';

describe('FindFlightsScreenComponent', () => {
  let component: FindFlightsScreenComponent;
  let fixture: ComponentFixture<FindFlightsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFlightsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFlightsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
