import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPlanComponent } from './seleccion-plan.component';

describe('SeleccionPlanComponent', () => {
  let component: SeleccionPlanComponent;
  let fixture: ComponentFixture<SeleccionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
