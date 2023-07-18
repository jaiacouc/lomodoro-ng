import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) {}

  public clickHandler(): void {
    this.dialog.open(SettingsFormComponent, {
      panelClass: 'dark-theme',
    });
  }
}
