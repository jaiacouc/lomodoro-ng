import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Themes } from '../../models/themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme$: Observable<Themes>;
  private _themeSubject: Subject<Themes> = new Subject<Themes>();

  constructor() {
    this.theme$ = this._themeSubject.asObservable();
  }

  public updateTheme(theme: Themes) {
    this._themeSubject.next(theme);
  }
}
