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
  private currentTimeSelection: number = this.workTime;
  private working: boolean = true;
  private interval: any;

  public startTimer(): void {
    this.stopped = false;
    const timeEnd: DateTime = DateTime.now().plus({
      minutes: this.currentTimeSelection,
    });
    this.interval = setInterval(() => {
      this.timeLeft = timeEnd
        .diff(DateTime.now(), ['minutes', 'seconds'])
        .toFormat('mm:ss');
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
      this.currentTimeSelection = this.breakTime;
      this.timeLeft = this.breakTime + ':00';
    } else {
      this.working = true;
      this.currentTimeSelection = this.workTime;
      this.timeLeft = this.workTime + ':00';
    }
  }
}
