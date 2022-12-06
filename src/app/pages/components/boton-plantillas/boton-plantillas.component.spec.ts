import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPlantillasComponent } from './boton-plantillas.component';

describe('BotonPlantillasComponent', () => {
  let component: BotonPlantillasComponent;
  let fixture: ComponentFixture<BotonPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPlantillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
