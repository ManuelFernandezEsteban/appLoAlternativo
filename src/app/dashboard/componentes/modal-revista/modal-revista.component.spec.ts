import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevistaComponent } from './modal-revista.component';

describe('ModalRevistaComponent', () => {
  let component: ModalRevistaComponent;
  let fixture: ComponentFixture<ModalRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
