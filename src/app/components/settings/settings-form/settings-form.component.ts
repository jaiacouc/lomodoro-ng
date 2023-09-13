import { Component, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent {
  public formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  public dialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SettingsFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.dialogForm = new FormGroup({
      workTimeControl: new FormControl(data.workTime),
      breakTimeControl: new FormControl(data.breakTime),
    });
  }

  public onSubmit(): void {
    this.formSubmitted.emit(this.dialogForm.value);
  }
}
