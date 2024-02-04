import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../service/api.service';

export interface PeriodicElement1 {
  producer: string;
  interval: string;
  previousYear: string;
  followingYear: string;
}

export interface PeriodicElement2 {
  producer: string;
  interval: string;
  previousYear: string;
  followingYear: string;
}
const ELEMENT_DATA1: PeriodicElement1[] = [
  { producer: '1999', interval: '1', previousYear: '2002', followingYear: '2023'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  { producer: '1989', interval: '1', previousYear: '2082', followingYear: '2023'},
];
/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-producer',
  styleUrls: ['table-producers.component.css'],
  templateUrl: 'table-producers.component.html',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatCardModule, CommonModule],
})

export class TableProducersComponent {
  displayedColumns: string[] = ['producer', 'interval', 'previousWin', 'followingWin'];

  minProducer: any[] = [];
  maxProducer: any[] = [];
  constructor(private producerMaxMin: ApiService) {}

  dataSourceMax = new MatTableDataSource<any>();
  dataSourceMin = new MatTableDataSource<any>();
  ngOnInit() {
    // Chama o serviço para obter os dados da API
    this.producerMaxMin.getProducerMaxMix().subscribe((data) => {

      //popular min producer
      this.minProducer = data.min; // Atribui os dados à propriedade 'min'
      this.dataSourceMin.data = this.minProducer; 

      //popular max producer
      this.maxProducer = data.max; // Atribui os dados à propriedade 'max'
      this.dataSourceMax.data = this.maxProducer; 
    });
  }
}

