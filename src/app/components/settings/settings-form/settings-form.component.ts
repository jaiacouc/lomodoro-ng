import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  public workTime: number = 45;
  public breakTime: number = 15;

  constructor(public dialogRef: MatDialogRef<SettingsFormComponent>) {}

  public dialogForm: FormGroup = new FormGroup({
    workTimeControl: new FormControl(45),
    breakTimeControl: new FormControl(15),
  });

  public onSubmit(event: any): void {
    this.formSubmitted.emit(event);
  }
}
