import { Component, OnDestroy } from '@angular/core';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';
import { TimesModel } from 'src/app/shared/models/times-model';
import { TimerService } from 'src/app/shared/services/timer-service/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {
  public workTime: number = 45;
  public breakTime: number = 15;
  public timeLeft: string = this.workTime + ':00';
  public stopped: boolean = false;
  public tabIndex: number = 0;
  private currentTimeSelection: number = this.workTime;
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
    this.stopped = false;
    const timeEnd: DateTime = DateTime.now().plus({
      minutes: this.currentTimeSelection,
    });
    this.interval = setInterval(() => {
      const time = timeEnd.diff(DateTime.now(), ['minutes', 'seconds']);
      this.timeLeft = time.toFormat('mm:ss');
      if (time.minutes === 0 && Math.trunc(time.seconds) === 0) {
        this.timeLeft = '00:00';
        this.stopTimer();
      }
    }, 1000);
  }

  public stopTimer(): void {
    this.stopped = true;
    clearInterval(this.interval);
  }

  public changeTimer(): void {
    // Stop so next button changes and disables.
    this.stopped = false;
    if (this.working) {
      this.working = false;
      this.tabIndex = 1;
      this.setTime(this.breakTime);
    } else {
      this.working = true;
      this.tabIndex = 0;
      this.setTime(this.workTime);
    }
  }

  private onTimeChange(newTimes: TimesModel) {
    this.workTime = newTimes.workTime;
    this.breakTime = newTimes.breakTime;
    if (this.interval) {
      this.stopTimer();
    }
    if (this.working) {
      this.setTime(this.workTime);
    } else {
      this.setTime(this.breakTime);
    }
  }

  private setTime(time: number) {
    this.timeLeft = time + ':00';
    this.currentTimeSelection = time;
  }
}
