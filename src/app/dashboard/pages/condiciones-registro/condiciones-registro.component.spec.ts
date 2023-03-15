import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesRegistroComponent } from './condiciones-registro.component';

describe('CondicionesRegistroComponent', () => {
  let component: CondicionesRegistroComponent;
  let fixture: ComponentFixture<CondicionesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
