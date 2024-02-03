import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieComponent } from './list-movies.component';

describe('ListComponent', () => {
  let component: ListMovieComponent;
  let fixture: ComponentFixture<ListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
