import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoMenuComponent } from './header-no-menu.component';

describe('HeaderNoMenuComponent', () => {
  let component: HeaderNoMenuComponent;
  let fixture: ComponentFixture<HeaderNoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
