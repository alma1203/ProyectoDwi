import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioRecreacionComponent } from './formulario-recreacion.component';

describe('FormularioRecreacionComponent', () => {
  let component: FormularioRecreacionComponent;
  let fixture: ComponentFixture<FormularioRecreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRecreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
