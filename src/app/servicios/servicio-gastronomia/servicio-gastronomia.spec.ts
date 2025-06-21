import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioGastronomiaComponent } from './servicio-gastronomia.component';

describe('ServicioGastronomiaComponent', () => {
  let component: ServicioGastronomiaComponent;
  let fixture: ComponentFixture<ServicioGastronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioGastronomiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
