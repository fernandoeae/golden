import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWhatsappComponent } from './button-whatsapp.component';

describe('ButtonWhatsappComponent', () => {
  let component: ButtonWhatsappComponent;
  let fixture: ComponentFixture<ButtonWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
