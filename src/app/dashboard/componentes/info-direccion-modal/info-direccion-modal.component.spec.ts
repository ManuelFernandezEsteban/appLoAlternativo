import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDireccionModalComponent } from './info-direccion-modal.component';

describe('InfoDireccionModalComponent', () => {
  let component: InfoDireccionModalComponent;
  let fixture: ComponentFixture<InfoDireccionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDireccionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDireccionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
