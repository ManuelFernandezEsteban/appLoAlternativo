import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarComprasEspecialistaComponent } from './verificar-compras-especialista.component';

describe('VerificarComprasEspecialistaComponent', () => {
  let component: VerificarComprasEspecialistaComponent;
  let fixture: ComponentFixture<VerificarComprasEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarComprasEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarComprasEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
