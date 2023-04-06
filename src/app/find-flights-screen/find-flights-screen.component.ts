import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-find-flights-screen',
  templateUrl: './find-flights-screen.component.html',
  styleUrls: ['./find-flights-screen.component.css']
})
export class FindFlightsScreenComponent implements OnInit {
  from = '';
  to = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteClicked(favorite: Favorite): void {
    this.from = favorite.from;
    this.to = favorite.to;
  }
}
