import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEspecialistasComponent } from './footer-especialistas.component';

describe('FooterEspecialistasComponent', () => {
  let component: FooterEspecialistasComponent;
  let fixture: ComponentFixture<FooterEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
