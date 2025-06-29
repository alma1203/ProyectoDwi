import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosComponent } from './testimonios.component';

describe('Testimonios', () => {
  let component: TestimoniosComponent;
  let fixture: ComponentFixture<TestimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
