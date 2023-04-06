import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDhDialogComponent } from './book-dh-dialog.component';

describe('BookDhDialogComponent', () => {
  let component: BookDhDialogComponent;
  let fixture: ComponentFixture<BookDhDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDhDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDhDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
