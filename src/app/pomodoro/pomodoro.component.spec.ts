import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroComponent } from './pomodoro.component';

describe('PomodoroComponent', () => {
  let component: PomodoroComponent;
  let fixture: ComponentFixture<PomodoroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PomodoroComponent]
    });
    fixture = TestBed.createComponent(PomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
