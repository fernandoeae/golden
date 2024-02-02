// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableListMovieComponent } from './components/tables/table-list-movie/table-list-movie.component';
import { TableListYear } from './components/tables/table-list-year/table-list-year.component';
import { TableProducersComponent } from './components/tables/table-producers/table-producers.component';
import { TableTopWinComponent } from './components/tables/table-top-win/table-top-win.component';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, TableListYear, MatButtonModule, CommonModule, MatToolbarModule, TableProducersComponent, TableListMovieComponent, TableTopWinComponent, MatCardModule, MatGridListModule, NavbarComponent ],
})


export class AppComponent implements OnInit {
  ngOnInit() {}
}
