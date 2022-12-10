import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeComponent } from './donde.component';

describe('DondeComponent', () => {
  let component: DondeComponent;
  let fixture: ComponentFixture<DondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
