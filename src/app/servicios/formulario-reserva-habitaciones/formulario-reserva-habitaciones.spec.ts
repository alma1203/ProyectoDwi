import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioReservaHabitacionesComponent } from './formulario-reserva-habitaciones.component';

describe('FormularioReservaHabitacionesComponent', () => {
  let component: FormularioReservaHabitacionesComponent;
  let fixture: ComponentFixture<FormularioReservaHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReservaHabitacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReservaHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
