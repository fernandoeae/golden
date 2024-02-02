import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopWinComponent } from './table-top-win.component';

describe('TableTopWinComponent', () => {
  let component: TableTopWinComponent;
  let fixture: ComponentFixture<TableTopWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTopWinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTopWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
