import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TimesModel } from '../../models/times-model';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  public times$: Observable<TimesModel>;
  private _timesSubject: Subject<TimesModel> = new Subject<TimesModel>();
  constructor() {
    this.times$ = this._timesSubject.asObservable();
  }

  public updateTimes(times: TimesModel) {
    this._timesSubject.next(times);
  }
}
