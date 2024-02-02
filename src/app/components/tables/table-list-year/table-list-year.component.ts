import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../service/api.service';


@Component({
  selector: 'table-list-year',
  styleUrls: ['table-list-year.component.css'],
  imports: [MatTableModule, MatSortModule, MatCardModule, CommonModule, ApiService],
  templateUrl: 'table-list-year.component.html',
  standalone: true,
  
})

export class TableListYear implements OnInit {
  yearsData: any[] = [];
  displayedColumns: string[] = ['years', 'winCount'];
  constructor(private movieService: ApiService) {}

  dataSource = new MatTableDataSource<any>();
  ngOnInit() {
    // Chama o serviço para obter os dados da API
    this.movieService.getMultipleWinner().subscribe((data) => {
      this.yearsData = data.years; // Atribui os dados à propriedade 'yearsData'
      this.dataSource.data = this.yearsData; 
    });
  }
}


