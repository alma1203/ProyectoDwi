import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioReservaGastronomicaComponent } from './formulario-reserva-gastronomica.component';

describe('FormularioReservaGastronomicaComponent', () => {
  let component: FormularioReservaGastronomicaComponent;
  let fixture: ComponentFixture<FormularioReservaGastronomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReservaGastronomicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReservaGastronomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
