import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadCuadradaComponent } from './especialidad-cuadrada.component';

describe('EspecialidadCuadradaComponent', () => {
  let component: EspecialidadCuadradaComponent;
  let fixture: ComponentFixture<EspecialidadCuadradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadCuadradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadCuadradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
