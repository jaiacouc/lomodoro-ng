import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SettingsComponent } from './settings.component';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
