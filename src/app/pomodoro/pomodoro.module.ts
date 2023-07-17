import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { PomodoroComponent } from './pomodoro.component';
import { TimerModule } from '../components/timer/timer.module';

@NgModule({
  declarations: [PomodoroComponent],
  imports: [CommonModule, MaterialModule, TimerModule],
  exports: [PomodoroComponent],
})
export class PomodoroModule {}
