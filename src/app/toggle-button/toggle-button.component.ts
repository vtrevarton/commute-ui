import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  @Input() selected!: boolean;
  @Input() label!: string;
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.toggled.emit(!this.selected);
  }
}
