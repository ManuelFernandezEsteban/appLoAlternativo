import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarComprasComponent } from './verificar-compras.component';

describe('VerificarComprasComponent', () => {
  let component: VerificarComprasComponent;
  let fixture: ComponentFixture<VerificarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
