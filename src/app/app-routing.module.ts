import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightsScreenComponent } from './find-flights-screen/find-flights-screen.component';
import { FlightDetailsScreenComponent } from './flight-details-screen/flight-details-screen.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';

const routes: Routes = [
  { path: 'find-flights', component: FindFlightsScreenComponent },
  { path: 'flight-results', component: FlightResultsComponent },
  { path: 'flight-details/:fltNum', component: FlightDetailsScreenComponent },
  { path: '**', component: FindFlightsScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
