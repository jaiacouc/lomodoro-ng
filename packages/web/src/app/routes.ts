import { Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'pomodoro', component: PomodoroComponent },
  { path: '', component: PomodoroComponent },
  { path: 'about', component: AboutComponent },
];
