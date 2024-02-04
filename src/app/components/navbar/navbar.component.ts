// navbar.component.ts

import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [MatToolbarModule, RouterOutlet, MatIcon, MatSidenavContainer, MatSidenavContent, MatSidenav, MatListModule, MatNavList],
  standalone: true,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToList() {
    this.router.navigate(['/list']);
  }
  
  



}
