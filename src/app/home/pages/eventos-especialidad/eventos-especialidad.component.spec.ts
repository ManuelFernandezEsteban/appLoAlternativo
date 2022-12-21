import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEspecialidadComponent } from './eventos-especialidad.component';

describe('EventosEspecialidadComponent', () => {
  let component: EventosEspecialidadComponent;
  let fixture: ComponentFixture<EventosEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosEspecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
