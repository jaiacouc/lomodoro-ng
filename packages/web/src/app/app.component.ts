import { Component } from '@angular/core';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [AppNavComponent],
})
export class AppComponent {}
