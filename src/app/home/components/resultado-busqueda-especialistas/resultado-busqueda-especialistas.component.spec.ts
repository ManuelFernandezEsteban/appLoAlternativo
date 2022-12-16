import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaEspecialistasComponent } from './resultado-busqueda-especialistas.component';

describe('ResultadoBusquedaEspecialistasComponent', () => {
  let component: ResultadoBusquedaEspecialistasComponent;
  let fixture: ComponentFixture<ResultadoBusquedaEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoBusquedaEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
