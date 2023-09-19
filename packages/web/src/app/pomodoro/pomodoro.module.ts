import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { PomodoroComponent } from './pomodoro.component';
import { TimerModule } from '../components/timer/timer.module';
import { TodoListModule } from '../components/todo-list/todo-list.module';

@NgModule({
  declarations: [PomodoroComponent],
  imports: [CommonModule, MaterialModule, TimerModule, TodoListModule],
  exports: [PomodoroComponent],
})
export class PomodoroModule {}
