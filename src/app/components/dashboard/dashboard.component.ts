import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';

@Component({
  standalone:true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterLinkActive, CommonModule, AppRoutingModule,  MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatSidenavModule, MatToolbarModule]
})

export class DashboardComponent { }
