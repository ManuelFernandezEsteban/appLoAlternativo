import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarEventoComponent } from './publicar-evento.component';

describe('PublicarEventoComponent', () => {
  let component: PublicarEventoComponent;
  let fixture: ComponentFixture<PublicarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
