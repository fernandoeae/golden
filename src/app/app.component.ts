// app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { FooterComponent } from './components/app-footer/footer.component';
import { ButtonWhatsappComponent } from './components/button-whatsapp/button-whatsapp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableListMovieComponent } from './components/tables/table-list-movie/table-list-movie.component';
import { TableListYear } from './components/tables/table-list-year/table-list-year.component';
import { TableProducersComponent } from './components/tables/table-producers/table-producers.component';
import { TableTopWinComponent } from './components/tables/table-top-win/table-top-win.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, ButtonWhatsappComponent, FooterComponent, FlexLayoutServerModule, FlexLayoutModule, AppRoutingModule, MatMenuModule, TableListYear, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, DashboardComponent, CommonModule, MatToolbarModule, TableProducersComponent, TableListMovieComponent, TableTopWinComponent, MatCardModule, MatGridListModule, NavbarComponent ],
})

export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
