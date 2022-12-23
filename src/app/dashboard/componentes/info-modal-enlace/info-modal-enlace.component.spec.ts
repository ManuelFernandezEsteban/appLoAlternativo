import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalEnlaceComponent } from './info-modal-enlace.component';

describe('InfoModalEnlaceComponent', () => {
  let component: InfoModalEnlaceComponent;
  let fixture: ComponentFixture<InfoModalEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoModalEnlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoModalEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
