import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaConectadaComponent } from './crear-cuenta-conectada.component';

describe('CrearCuentaConectadaComponent', () => {
  let component: CrearCuentaConectadaComponent;
  let fixture: ComponentFixture<CrearCuentaConectadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuentaConectadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuentaConectadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
