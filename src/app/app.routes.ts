import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListMovieComponent } from './components/list/list-movies.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ListMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
