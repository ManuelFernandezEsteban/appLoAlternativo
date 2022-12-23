import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEspecialistasComponent } from './filtro-especialistas.component';

describe('FiltroEspecialistasComponent', () => {
  let component: FiltroEspecialistasComponent;
  let fixture: ComponentFixture<FiltroEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
