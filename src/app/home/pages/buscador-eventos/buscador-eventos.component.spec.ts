import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEventosComponent } from './buscador-eventos.component';

describe('BuscadorEventosComponent', () => {
  let component: BuscadorEventosComponent;
  let fixture: ComponentFixture<BuscadorEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
