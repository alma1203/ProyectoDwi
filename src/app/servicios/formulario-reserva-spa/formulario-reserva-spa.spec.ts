
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioReservaSpaComponent } from './formulario-reserva-spa.component';

describe('FormularioReservaSpaComponent', () => {
  let component: FormularioReservaSpaComponent;
  let fixture: ComponentFixture<FormularioReservaSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReservaSpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReservaSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
