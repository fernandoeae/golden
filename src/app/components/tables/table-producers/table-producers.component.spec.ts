import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProducersComponent } from './table-producers.component';

describe('TableProducersComponent', () => {
  let component: TableProducersComponent;
  let fixture: ComponentFixture<TableProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProducersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
