import { Component, Output, EventEmitter } from '@angular/core';
import { faPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Output() selected = new EventEmitter<Favorite>(); 

  faStar = faStar;
  faPlane = faPlane;

  favorites = [
    { from: 'DEN', to: 'DFW' },
    { from: 'DFW', to: 'DEN' }
  ];

  onClick(favorite: Favorite): void {
    this.selected.emit(favorite);
  }
}
