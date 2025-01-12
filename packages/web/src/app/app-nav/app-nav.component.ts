import { Component, WritableSignal, signal } from '@angular/core';
import { MenuOption } from '../shared/models/menu-option-model';
import { Themes } from '../shared/models/themes';
import { ThemeService } from '../shared/services/theme-service/theme-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss'],
    imports: [
        NgClass,
        MatSidenavContainer,
        MatSidenav,
        MatToolbar,
        MatIconButton,
        MatIcon,
        MatNavList,
        NgFor,
        MatListItem,
        RouterLink,
        MatSidenavContent,
        RouterOutlet,
    ]
})
export class AppNavComponent {
  public menuOptions: MenuOption[] = [
    {
      name: 'Pomodoro Timer',
      link: 'pomodoro',
      selected: true,
    },
    {
      name: 'About',
      link: 'about',
      selected: false,
    },
  ];
  public menuOpened: WritableSignal<boolean> = signal(false);
  public theme: WritableSignal<Themes> = signal(Themes.Light);

  constructor(private _themeService: ThemeService) {}

  public openMenu(): void {
    this.menuOpened.update((value) => !value);
  }

  public closeBackDrop(): void {
    this.menuOpened.set(false);
  }

  public changeTheme(): void {
    this.theme.update((theme) => (theme === Themes.Light ? Themes.Dark : Themes.Light));
    this._themeService.updateTheme(this.theme());
  }

  public menuItemSelected(menuItem: MenuOption): void {
    this.clearMenuSelections();
    menuItem.selected = true;
  }

  private clearMenuSelections(): void {
    this.menuOptions.map((item) => (item.selected = false));
  }
}
