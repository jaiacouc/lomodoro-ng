import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule, MaterialModule, SettingsModule],
  exports: [TimerComponent],
})
export class TimerModule {}
