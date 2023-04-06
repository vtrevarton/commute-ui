import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { FindFlightsScreenComponent } from './find-flights-screen/find-flights-screen.component';
import { FlightSummaryComponent } from './flight-summary/flight-summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { FlightDetailsScreenComponent } from './flight-details-screen/flight-details-screen.component';
import { LoadSummaryComponent } from './load-summary/load-summary.component';
import { StandbyListComponent } from './standby-list/standby-list.component';
import { BookDhComponent } from './book-dh/book-dh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
// import { BookDhDialogComponent } from './book-dh-dialog/book-dh-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    FavoritesComponent,
    FlightResultsComponent,
    FindFlightsScreenComponent,
    FlightSummaryComponent,
    NavbarComponent,
    ToggleButtonComponent,
    FlightDetailsScreenComponent,
    LoadSummaryComponent,
    StandbyListComponent,
    BookDhComponent,
    // BookDhDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
