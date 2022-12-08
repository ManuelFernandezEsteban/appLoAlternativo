import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEspecialistasComponent } from './boton-especialistas.component';

describe('BotonEspecialistasComponent', () => {
  let component: BotonEspecialistasComponent;
  let fixture: ComponentFixture<BotonEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
