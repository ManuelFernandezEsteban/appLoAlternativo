import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadRedondaComponent } from './especialidad-redonda.component';

describe('EspecialidadRedondaComponent', () => {
  let component: EspecialidadRedondaComponent;
  let fixture: ComponentFixture<EspecialidadRedondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadRedondaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadRedondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
