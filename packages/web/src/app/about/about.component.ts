import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [MatTabGroup, MatTab]
})
export class AboutComponent {

}
