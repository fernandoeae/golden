//app.routes.ts
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TableTopWinComponent } from './components/tables/table-top-win/table-top-win.component';

export const routes: Routes = [
  { path: '', component: TableTopWinComponent },
  { path: 'dashboard', component: TableTopWinComponent },
  { path: 'list', component: TableTopWinComponent },
];

@NgModule({

})
export class AppRoutingModule { }
