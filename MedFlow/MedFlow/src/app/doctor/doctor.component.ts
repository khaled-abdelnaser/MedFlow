import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor.component.html'
})
export class DoctorComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
