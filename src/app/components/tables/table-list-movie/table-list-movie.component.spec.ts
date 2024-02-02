import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListMovieComponent } from './table-list-movie.component';

describe('TableListMovieComponent', () => {
  let component: TableListMovieComponent;
  let fixture: ComponentFixture<TableListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
