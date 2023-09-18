import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'pomodoro', component: PomodoroComponent },
  { path: '', component: PomodoroComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
