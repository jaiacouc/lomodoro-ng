import { Component, OnDestroy, Signal, WritableSignal, computed, signal } from '@angular/core';
import { DateTime, Duration } from 'luxon';
import { Subscription } from 'rxjs';
import { TimesModel } from 'src/app/shared/models/times-model';
import { TimerService } from 'src/app/shared/services/timer-service/timer.service';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { SettingsComponent } from '../settings/settings.component';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    imports: [MatCard, MatCardHeader, MatTabGroup, MatTab, SettingsComponent, MatCardContent, MatButton, NgIf]
})
export class TimerComponent implements OnDestroy {
  private readonly MILLITOMIN: number = 60000;

  public workTime: WritableSignal<number> = signal(45);
  public breakTime: WritableSignal<number> = signal(15);
  public timeLeft: Signal<string> = computed(() => this.workingTime().toFormat('mm:ss'));
  public stopped: WritableSignal<boolean> = signal(true);
  public disableStopButton: Signal<boolean> = computed(
    () => this.timeLeft() === this.workTime() + ':00' || this.timeLeft() === this.breakTime() + ':00',
  );
  public tabIndex: number = 0;

  private workingTime: WritableSignal<Duration> = signal(Duration.fromMillis(this.workTime() * this.MILLITOMIN));
  private currentTimeSelection: WritableSignal<number> = signal(this.workTime());
  private working: boolean = true;
  private interval: any;
  private _timerSubscription: Subscription = new Subscription();

  constructor(private _timerService: TimerService) {
    this._timerSubscription = _timerService.times$.subscribe((times: TimesModel) => {
      this.onTimeChange(times);
    });
  }

  ngOnDestroy(): void {
    this._timerSubscription.unsubscribe();
  }

  public startTimer(): void {
    this.stopped.set(false);
    if (this.workingTime().milliseconds / this.MILLITOMIN === this.currentTimeSelection()) {
      const timeEnd: DateTime = DateTime.now().plus({
        minutes: this.currentTimeSelection(),
      });
      this.interval = setInterval(() => {
        this.workingTime.set(timeEnd.diff(DateTime.now(), ['minutes', 'seconds']));
        if (this.workingTime().minutes === 0 && Math.trunc(this.workingTime().seconds) === 0) {
          this.stopTimer();
        }
      }, 1000);
    } else {
      const timeEnd: DateTime = DateTime.now().plus({
        minutes: this.workingTime().minutes,
        seconds: this.workingTime().seconds,
      });
      this.interval = setInterval(() => {
        this.workingTime.set(timeEnd.diff(DateTime.now(), ['minutes', 'seconds']));
        if (this.workingTime().minutes === 0 && Math.trunc(this.workingTime().seconds) === 0) {
          this.stopTimer();
        }
      });
    }
  }

  public stopTimer(): void {
    this.stopped.set(true);
    clearInterval(this.interval);
  }

  public changeTimer(): void {
    // Stop so next button changes and disables.
    this.stopped.set(true);
    if (this.working) {
      this.working = false;
      this.tabIndex = 1;
      this.setTime(this.breakTime());
    } else {
      this.working = true;
      this.tabIndex = 0;
      this.setTime(this.workTime());
    }
  }

  private onTimeChange(newTimes: TimesModel) {
    this.workTime.set(newTimes.workTime);
    this.breakTime.set(newTimes.breakTime);
    if (this.interval) {
      this.stopTimer();
    }
    if (this.working) {
      this.setTime(this.workTime());
    } else {
      this.setTime(this.breakTime());
    }
  }

  private setTime(time: number) {
    this.workingTime.set(Duration.fromMillis(time * this.MILLITOMIN));
    this.currentTimeSelection.set(time);
  }
}
