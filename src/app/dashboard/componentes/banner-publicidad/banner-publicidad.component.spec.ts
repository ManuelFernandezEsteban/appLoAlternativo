import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPublicidadComponent } from './banner-publicidad.component';

describe('BannerPublicidadComponent', () => {
  let component: BannerPublicidadComponent;
  let fixture: ComponentFixture<BannerPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPublicidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
