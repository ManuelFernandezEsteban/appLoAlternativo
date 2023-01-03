import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPublicidadComponent } from './carousel-publicidad.component';

describe('CarouselPublicidadComponent', () => {
  let component: CarouselPublicidadComponent;
  let fixture: ComponentFixture<CarouselPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPublicidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
