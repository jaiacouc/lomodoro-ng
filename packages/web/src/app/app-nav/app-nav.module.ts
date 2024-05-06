import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNavComponent } from './app-nav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [CommonModule, AppRoutingModule, AppNavComponent],
    exports: [AppNavComponent],
})
export class AppNavModule {}
