import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandbyListComponent } from './standby-list.component';

describe('StandbyListComponent', () => {
  let component: StandbyListComponent;
  let fixture: ComponentFixture<StandbyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandbyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandbyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
