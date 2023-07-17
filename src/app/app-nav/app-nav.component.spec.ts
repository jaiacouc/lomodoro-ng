import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavComponent } from './app-nav.component';

describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppNavComponent]
    });
    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
