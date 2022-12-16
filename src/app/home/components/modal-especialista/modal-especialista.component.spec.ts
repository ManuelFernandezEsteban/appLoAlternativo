import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEspecialistaComponent } from './modal-especialista.component';

describe('ModalEspecialistaComponent', () => {
  let component: ModalEspecialistaComponent;
  let fixture: ComponentFixture<ModalEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
