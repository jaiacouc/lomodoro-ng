import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppNavModule } from './app-nav/app-nav.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AppNavModule,
    PomodoroModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
