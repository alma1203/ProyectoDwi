import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioGymComponent } from './servicio-gym.component';

describe('ServicioGymComponent', () => {
  let component: ServicioGymComponent;
  let fixture: ComponentFixture<ServicioGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioGymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
