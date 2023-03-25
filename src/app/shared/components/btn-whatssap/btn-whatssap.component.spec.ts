import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhatssapComponent } from './btn-whatssap.component';

describe('BtnWhatssapComponent', () => {
  let component: BtnWhatssapComponent;
  let fixture: ComponentFixture<BtnWhatssapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWhatssapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWhatssapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
