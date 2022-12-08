import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPlantillaComponent } from './boton-plantilla.component';

describe('BotonPlantillaComponent', () => {
  let component: BotonPlantillaComponent;
  let fixture: ComponentFixture<BotonPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPlantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
