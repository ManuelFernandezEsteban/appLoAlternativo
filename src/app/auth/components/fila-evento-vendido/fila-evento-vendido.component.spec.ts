import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaEventoVendidoComponent } from './fila-evento-vendido.component';

describe('FilaEventoVendidoComponent', () => {
  let component: FilaEventoVendidoComponent;
  let fixture: ComponentFixture<FilaEventoVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaEventoVendidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaEventoVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
