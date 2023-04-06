import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightData } from '../models/flight-data';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight-details-screen',
  templateUrl: './flight-details-screen.component.html',
  styleUrls: ['./flight-details-screen.component.css']
})
export class FlightDetailsScreenComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;

  flightNumber?: string;
  flightData: FlightData = { 
    airlineCode: 'AA', 
    flightNumber: '1244', 
    departureTime: '08:54', 
    departureAirport: 'DEN', 
    departureGate: 'A50', 
    arrivalTime: '11:39', 
    arrivalAirport: 'DFW', 
    arrivalGate: 'D29', 
    aircraftText: 'A321', 
    status: 'scheduled', 
    pax: 173 
  };
;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => this.flightNumber = params['fltNum']);
  }

}
