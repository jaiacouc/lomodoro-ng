import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Input() workTime: number = 45;
  @Input() breakTime: number = 15;

  public timeLeft: string = this.workTime + ':00';
  public stopped: boolean = false;
  public tabIndex: number = 0;
  private currentTimeSelection: number = this.workTime;
  private working: boolean = true;
  private interval: any;

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
    this.stopped = false;
    if (this.working) {
      this.working = false;
      this.tabIndex = 1;
      this.currentTimeSelection = this.breakTime;
      this.timeLeft = this.breakTime + ':00';
    } else {
      this.working = true;
      this.tabIndex = 0;
      this.currentTimeSelection = this.workTime;
      this.timeLeft = this.workTime + ':00';
    }
  }
}
