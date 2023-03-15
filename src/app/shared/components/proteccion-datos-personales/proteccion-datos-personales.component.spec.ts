import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionDatosPersonalesComponent } from './proteccion-datos-personales.component';

describe('ProteccionDatosPersonalesComponent', () => {
  let component: ProteccionDatosPersonalesComponent;
  let fixture: ComponentFixture<ProteccionDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteccionDatosPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteccionDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
