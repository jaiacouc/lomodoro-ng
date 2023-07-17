import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TimerComponent],
})
export class TimerModule {}
