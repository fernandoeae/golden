import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-table-list-movie',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, FormsModule, MatIcon, MatButton, MatInputModule, MatFormFieldModule, MatSortModule, MatCardModule, CommonModule, ApiService],
  templateUrl: './table-list-movie.component.html',
  styleUrl: './table-list-movie.component.css'
})

export class TableListMovieComponent {
  anoSelecionado: number = 0;
  movieData: any[] = [];
  displayedColumns: string[] = ['id', 'year', 'title'];
  dataSource = new MatTableDataSource<any>();

  constructor(private movieService: ApiService, private http: HttpClient) { }
  
  carregarDadosDaTabela() {
    this.movieService.getMovieWinnerBY(this.anoSelecionado).subscribe((data) => {
      this.movieData = data; // Atribui os dados à propriedade 'yearsData'
      this.dataSource.data = this.movieData;
    });
  }
  
  ngOnInit(){}

}
