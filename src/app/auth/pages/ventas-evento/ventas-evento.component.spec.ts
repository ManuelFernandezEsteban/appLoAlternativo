import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEventoComponent } from './ventas-evento.component';

describe('VentasEventoComponent', () => {
  let component: VentasEventoComponent;
  let fixture: ComponentFixture<VentasEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
