import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme-service/theme-service.service';
import { Themes } from 'src/app/shared/models/themes';
import { TimerService } from 'src/app/shared/services/timer-service/timer.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [MatIconButton, MatIcon],
})
export class SettingsComponent implements OnDestroy {
  private _workTime: number = 45;
  private _breakTime: number = 15;
  private _dialogRef: MatDialogRef<SettingsFormComponent> | undefined = undefined;
  private _onSubmitSubscription: Subscription = new Subscription();
  private _themeSubscription: Subscription = new Subscription();
  private _theme: Themes = Themes.Light;

  constructor(
    private _dialog: MatDialog,
    private _themeService: ThemeService,
    private _timerService: TimerService,
  ) {
    this._themeSubscription = this._themeService.theme$.subscribe((theme) => {
      this._theme = theme;
    });
  }

  ngOnDestroy(): void {
    this._onSubmitSubscription.unsubscribe();
    this._themeSubscription.unsubscribe();
  }

  public clickHandler(): void {
    this._dialogRef = this._dialog.open(SettingsFormComponent, {
      panelClass: this._theme,
      data: {
        workTime: this._workTime,
        breakTime: this._breakTime,
      },
    });
    this._onSubmitSubscription = this._dialogRef.componentInstance.formSubmitted.subscribe((data) => {
      this._workTime = data.workTimeControl;
      this._breakTime = data.breakTimeControl;
      this._timerService.updateTimes({ workTime: this._workTime, breakTime: this._breakTime });
    });
  }
}
