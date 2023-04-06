import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlane, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FlightData } from '../models/flight-data';

@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.css']
})
export class FlightSummaryComponent implements OnInit {
  @Input() flightData!: FlightData;

  faPlane = faPlane;
  faUserGroup = faUserGroup;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onFlightClick(airlineCode: string, flightNumber: string): void {
    this._router.navigate([`/flight-details/${airlineCode}${flightNumber}`]);
  }
}
