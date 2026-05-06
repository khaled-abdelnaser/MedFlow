import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  user = {
    name: 'Ahmed',
    role: 'Patient'
  };

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}