import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRegistroEspecialistasComponent } from './legal-registro-especialistas.component';

describe('LegalRegistroEspecialistasComponent', () => {
  let component: LegalRegistroEspecialistasComponent;
  let fixture: ComponentFixture<LegalRegistroEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalRegistroEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalRegistroEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
