import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'table-top-win',
  styleUrls: ['table-top-win.component.css'],
  templateUrl: 'table-top-win.component.html',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatCardModule],
})

export class TableTopWinComponent {
  studios: any[] = [];
  displayedColumns: string[] = ['name', 'winCount'];
  constructor(private movieService: ApiService) {}
  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    // Chama o serviço para obter os dados da API
    this.movieService.getStudioWinCount().subscribe((data) => {
      this.studios = data.studios; // Atribui os dados à propriedade 'yearsData'
      
      // Ordena os estúdios por número de vitórias em ordem decrescente
      this.studios.sort((a, b) => b.winCount - a.winCount);
      // Pega os top 3 estúdios
      const top3Studios = this.studios.slice(0, 3);
      // Atualiza o dataSource com os top 3 estúdios
      this.dataSource.data = top3Studios;
      console.log('FERNANDO:'+data.studios.name)
    });
  }
}



