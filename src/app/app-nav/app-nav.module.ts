import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { AppNavComponent } from './app-nav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AppNavComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [AppNavComponent],
})
export class AppNavModule {}
