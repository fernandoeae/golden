import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  selector: 'list-movie-component',
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css',
  imports: [RouterOutlet, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule]
})

export class ListMovieComponent {

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goTolist() {
    this.router.navigate(['/list']);
  }
  
}
