import { Component, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
    selector: 'settings-form',
    templateUrl: './settings-form.component.html',
    styleUrls: ['./settings-form.component.scss'],
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatButton,
        MatDialogClose,
    ],
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
