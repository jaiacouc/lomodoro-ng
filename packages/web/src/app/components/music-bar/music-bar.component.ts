import { Component, signal, Signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Themes } from 'src/app/shared/models/themes';
import { ThemeService } from 'src/app/shared/services/theme-service/theme-service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-music-bar',
  imports: [MatIcon, MatIconButton, NgClass],
  templateUrl: './music-bar.component.html',
  styleUrl: './music-bar.component.scss',
})
export class MusicBarComponent {
  public theme: Signal<Themes>;
  constructor(private _themeService: ThemeService) {
    this.theme = toSignal(_themeService.theme$) as Signal<Themes>;
  }
}
