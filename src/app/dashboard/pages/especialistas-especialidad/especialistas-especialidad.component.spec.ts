import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistasEspecialidadComponent } from './especialistas-especialidad.component';

describe('EspecialistasEspecialidadComponent', () => {
  let component: EspecialistasEspecialidadComponent;
  let fixture: ComponentFixture<EspecialistasEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistasEspecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialistasEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
