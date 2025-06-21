import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioHabitacionesApartamentComponent } from './servicio-habitaciones-apartament.component';

describe('ServicioHabitacionesApartamentComponent', () => {
  let component: ServicioHabitacionesApartamentComponent;
  let fixture: ComponentFixture<ServicioHabitacionesApartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioHabitacionesApartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioHabitacionesApartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
