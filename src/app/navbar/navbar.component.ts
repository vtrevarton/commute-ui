import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() backRoute!: string;

  faChevronLeft = faChevronLeft;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClicked(): void {
    this.router.navigate([`/${this.backRoute}`]);
  }

}
