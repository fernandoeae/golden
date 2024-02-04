import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [MatToolbarModule, MatIconModule, MatDividerModule, RouterOutlet, MatButtonModule, MatIcon, MatSidenavContainer, MatSidenavContent, MatSidenav, MatListModule, MatNavList],
  standalone: true,
})
export class NavbarComponent {
  constructor(private router: Router) { }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToList() {
    this.router.navigate(['/list']);
  }

}
