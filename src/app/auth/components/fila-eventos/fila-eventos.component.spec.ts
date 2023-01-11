import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaEventosComponent } from './fila-eventos.component';

describe('FilaEventosComponent', () => {
  let component: FilaEventosComponent;
  let fixture: ComponentFixture<FilaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
