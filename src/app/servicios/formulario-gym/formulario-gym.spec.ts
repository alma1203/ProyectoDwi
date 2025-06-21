import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioGymComponent } from './formulario-gym.component';

describe('FormularioGymComponent', () => {
  let component: FormularioGymComponent;
  let fixture: ComponentFixture<FormularioGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioGymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
