import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book.component.html'
})
export class BookComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}