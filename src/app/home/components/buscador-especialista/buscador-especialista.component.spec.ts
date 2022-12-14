import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEspecialistaComponent } from './buscador-especialista.component';

describe('BuscadorEspecialistaComponent', () => {
  let component: BuscadorEspecialistaComponent;
  let fixture: ComponentFixture<BuscadorEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
