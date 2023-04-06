import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements AfterViewInit {
  @Input() from: string = '';
  @Input() to: string = '';

  // Icons
  faRightLeft = faRightLeft;
  faMagnifyingGlass = faMagnifyingGlass;
  
  // Date picker 
  datePicker = flatpickr('#date-picker', {}); // Just a placeholder.

  // State
  date = new Date();
  nonstopSelected = true;
  connectingSelected = false;

  constructor(private _router: Router) {}

  ngAfterViewInit(): void {
    // Configure date picker
    this.datePicker = flatpickr("#date-picker", {
      defaultDate: 'today',
      altInput: true,
      altFormat: 'F j, Y',  // Displayed format
      dateFormat: 'Y-m-d'   // Stored format  
    });
  }

  onNonstopToggled(selected: boolean): void {
    this.nonstopSelected = selected;
  }

  onConnectingToggled(selected: boolean): void {
    this.connectingSelected = selected;
  }

  onSwapClick(): void {
    let temp = this.from;
    this.from = this.to;
    this.to = temp; 
  }

  onFindFlightsClick(): void {
    this._router.navigate(['/flight-results']);
  }
}
