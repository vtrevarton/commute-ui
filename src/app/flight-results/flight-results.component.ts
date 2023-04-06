import { Component, OnInit } from '@angular/core';
import { ConnectingFlight } from '../models/connecting-flight';
import { FlightData } from '../models/flight-data';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  departureArpt = 'DEN';
  arrivalArpt = 'DFW';
  date = new Date();
  showDeparted = false;

  nonstopFlights: FlightData[] = [
    { airlineCode: 'AA', flightNumber: '1067', departureTime: '05:57', departureAirport: 'DEN', departureGate: 'A51', arrivalTime: '09:14', arrivalAirport: 'DFW', arrivalGate: 'C31', aircraftText: 'A321', status: 'departed', pax: 192 },
    { airlineCode: 'AA', flightNumber: '852', departureTime: '07:24', departureAirport: 'DEN', departureGate: 'A49', arrivalTime: '10:37', arrivalAirport: 'DFW', arrivalGate: 'C30', aircraftText: 'B737', status: 'departed', pax: 173 },
    { airlineCode: 'AA', flightNumber: '1320', departureTime: '08:13', departureAirport: 'DEN', departureGate: 'A51', arrivalTime: '11:01', arrivalAirport: 'DFW', arrivalGate: 'B7', aircraftText: 'A321', status: 'departed', pax: 131 },
    { airlineCode: 'AA', flightNumber: '1244', departureTime: '08:54', departureAirport: 'DEN', departureGate: 'A50', arrivalTime: '11:39', arrivalAirport: 'DFW', arrivalGate: 'D29', aircraftText: 'B737', status: 'scheduled', pax: 173 },
    { airlineCode: 'AA', flightNumber: '1321', departureTime: '12:52', departureAirport: 'DEN', departureGate: '', delayedDepartureTime: '13:45', arrivalTime: '15:51', arrivalAirport: 'DFW', arrivalGate: 'B12', delayedArrivalTime: '16:44', aircraftText: 'A321', status: 'delayed', pax: 190 },
    { airlineCode: 'AA', flightNumber: '1832', departureTime: '16:40', departureAirport: 'DEN', departureGate: '', arrivalTime: '19:41', arrivalAirport: 'DFW', arrivalGate: '', aircraftText: 'A321', status: 'canceled', pax: 190 },
  ];

  connectingFlights: ConnectingFlight[] = [
    { flightA:
        { airlineCode: 'AA', flightNumber: '1991', departureTime: '07:19', departureAirport: 'DEN', departureGate: 'A53', arrivalTime: '11:57', arrivalAirport: 'PHX', arrivalGate: 'A26', aircraftText: 'A321', status: 'departed', pax: 185 },
      flightB:
        { airlineCode: 'AA', flightNumber: '569', departureTime: '10:09', departureAirport: 'PHX', departureGate: 'A7', arrivalTime: '14:18', arrivalAirport: 'DFW', arrivalGate: 'C15', aircraftText: 'A321', status: 'scheduled', pax: 195 },
    },
    { flightA:
        { airlineCode: 'AA', flightNumber: '1313', departureTime: '13:26', departureAirport: 'DEN', departureGate: 'A50', delayedDepartureTime: '14:30', arrivalTime: '18:52', arrivalAirport: 'PHL', arrivalGate: 'B16', delayedArrivalTime: '19:59', aircraftText: 'A320', status: 'delayed', pax: 150 },
      flightB:
        { airlineCode: 'AA', flightNumber: '1115', departureTime: '20:25', departureAirport: 'PHL', departureGate: 'A21', arrivalTime: '23:26', arrivalAirport: 'DFW', arrivalGate: 'C14', aircraftText: 'A321', status: 'scheduled', pax: 190 },
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onShowDepartedToggled(selected: boolean): void {
    this.showDeparted = selected; 
  }
}
