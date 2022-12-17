import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioRedondoComponent } from './directorio-redondo.component';

describe('DirectorioRedondoComponent', () => {
  let component: DirectorioRedondoComponent;
  let fixture: ComponentFixture<DirectorioRedondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorioRedondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioRedondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
