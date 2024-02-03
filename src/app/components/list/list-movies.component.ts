import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../service/api.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-list',
  styleUrls: ['list-movies.component.css'],
  templateUrl: 'list-movies.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule],
})



//export class ListMovieComponent implements OnInit, AfterViewInit {
export class ListMovieComponent implements OnInit {
  contentMovie: any[] = [];
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  dataSource = new MatTableDataSource<any>();

  constructor(private movieService: ApiService) {}
  
  ngOnInit() {
    // Chama o serviço para obter os dados da API
    this.movieService.getMultipleWinner().subscribe((data) => {
      this.contentMovie = data.years; // Atribui os dados à propriedade 'yearsData'
      this.dataSource.data = this.contentMovie; 
      console.log('olha fer: ' + this.dataSource.data);
    });
  }

  //@ViewChild(MatPaginator) paginator!: MatPaginator;

  //ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
  //}
}

