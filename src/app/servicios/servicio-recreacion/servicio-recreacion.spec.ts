import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioRecreacionComponent } from './servicio-recreacion.component';

describe('ServicioRecreacionComponent', () => {
  let component: ServicioRecreacionComponent;
  let fixture: ComponentFixture<ServicioRecreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioRecreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioRecreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
