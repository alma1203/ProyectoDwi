import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioEventosComponent } from './servicio-eventos.component';

describe('ServicioEventosComponent', () => {
  let component: ServicioEventosComponent;
  let fixture: ComponentFixture<ServicioEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
