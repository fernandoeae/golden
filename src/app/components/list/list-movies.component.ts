import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
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
  imports: [MatTableModule, MatFormField, MatInputModule, CommonModule, MatPaginatorModule, MatSortModule, MatCardModule],
})

//export class ListMovieComponent implements OnInit, AfterViewInit {
export class ListMovieComponent implements OnInit {
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  dataSource = new MatTableDataSource<any>();
  dataFake = '';

  constructor(private movieService: ApiService) { }

  applyFilter(event: any, columnName: string) {
    const filterValue = (event?.target?.value || '').trim().toLowerCase();

    // Se o valor do filtro estiver vazio, não aplique o filtro
    if (!filterValue) {
      this.dataSource.filter = '';
      return;
    }

    // Aplica o filtro apenas à coluna especificada
    this.dataSource.filterPredicate = (data, filter) => {
      const lowerCaseValue = data[columnName].toString().toLowerCase();
      return lowerCaseValue.includes(filter);
    };

    // Define o valor do filtro
    this.dataSource.filter = filterValue;
  }


  ngOnInit() {
    this.movieService.getListMovies().subscribe((data) => {
      if (data && data.content && data.content.length > 0) {
        this.dataSource.data = data.content;
      } else {
        this.dataSource.data = fakeMovieData.content;
        this.dataFake = 'yes';
      }
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export const fakeMovieData = {
  content: [
    { id: 1, year: 2022, title: 'Movie 1', winner: 'Yes' },
    { id: 2, year: 2022, title: 'Movie 2', winner: 'No' },
    { id: 3, year: 2022, title: 'Movie 3', winner: 'Yes' },
    { id: 4, year: 2022, title: 'Movie 4', winner: 'No' },
    { id: 5, year: 2022, title: 'Movie 5', winner: 'Yes' },
    { id: 6, year: 2022, title: 'Movie 6', winner: 'No' },
    { id: 7, year: 2022, title: 'Movie 7', winner: 'Yes' },
    { id: 8, year: 2022, title: 'Movie 8', winner: 'No' },
    { id: 9, year: 2022, title: 'Movie 9', winner: 'Yes' },
    { id: 10, year: 2022, title: 'Movie 10', winner: 'No' },
    { id: 11, year: 2022, title: 'Movie 11', winner: 'Yes' },
    { id: 12, year: 2022, title: 'Movie 12', winner: 'No' },
    { id: 13, year: 2022, title: 'Movie 13', winner: 'Yes' },
    { id: 14, year: 2022, title: 'Movie 14', winner: 'No' },
    { id: 15, year: 2022, title: 'Movie 15', winner: 'Yes' },
    { id: 16, year: 2022, title: 'Movie 16', winner: 'No' },
    { id: 17, year: 2022, title: 'Movie 17', winner: 'Yes' },
    { id: 18, year: 2022, title: 'Movie 18', winner: 'No' },
    { id: 19, year: 2022, title: 'Movie 19', winner: 'Yes' },
    { id: 20, year: 2022, title: 'Movie 20', winner: 'No' },
  ],
  pageable: {
    sort: { unsorted: true, sorted: false, empty: true },
    offset: 0,
    pageSize: 10,
    pageNumber: 1,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 20,
  last: true,
  size: 10,
  number: 1,
  sort: { unsorted: true, sorted: false, empty: true },
  first: true,
  numberOfElements: 20,
  empty: false,
};


