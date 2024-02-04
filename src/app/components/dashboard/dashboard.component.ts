import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TableListMovieComponent } from '../tables/table-list-movie/table-list-movie.component';
import { TableListYear } from '../tables/table-list-year/table-list-year.component';
import { TableProducersComponent } from '../tables/table-producers/table-producers.component';
import { TableTopWinComponent } from '../tables/table-top-win/table-top-win.component';


@Component({
  standalone:true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterLinkActive, FlexLayoutModule, FlexLayoutServerModule, TableListMovieComponent, RouterOutlet, TableListYear, TableProducersComponent, TableTopWinComponent, CommonModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatSidenavModule, MatToolbarModule]
})

export class DashboardComponent {

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goTolist() {
    this.router.navigate(['/list']);
  }
 }
