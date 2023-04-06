export interface FlightData {
	airlineCode: string;
	flightNumber: string;
  departureAirport: string;
  departureTime: string;
  departureGate: string;
  delayedDepartureTime?: string;
  arrivalAirport: string;
  arrivalTime: string;
  arrivalGate: string;
  delayedArrivalTime?: string;
  aircraftCode?: string;
	aircraftText: string;
	status: 'scheduled' | 'departed' | 'delayed' | 'canceled';
  pax: number;
};