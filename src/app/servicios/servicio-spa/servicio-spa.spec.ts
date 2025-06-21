import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioSpaComponent } from './servicio-spa.component';

describe('ServicioSpaComponent', () => {
  let component: ServicioSpaComponent;
  let fixture: ComponentFixture<ServicioSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioSpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
