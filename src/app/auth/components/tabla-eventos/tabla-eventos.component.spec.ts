import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEventosComponent } from './tabla-eventos.component';

describe('TablaEventosComponent', () => {
  let component: TablaEventosComponent;
  let fixture: ComponentFixture<TablaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
