import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDhComponent } from './book-dh.component';

describe('BookDhComponent', () => {
  let component: BookDhComponent;
  let fixture: ComponentFixture<BookDhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
