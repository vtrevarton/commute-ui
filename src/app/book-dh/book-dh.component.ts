import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { BookDhDialogComponent } from '../book-dh-dialog/book-dh-dialog.component';

@Component({
  selector: 'app-book-dh',
  templateUrl: './book-dh.component.html',
  styleUrls: ['./book-dh.component.css']
})
export class BookDhComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onBookDhClick(): void {
    this.dialog.open(BookDhDialogComponent);
  }

}
