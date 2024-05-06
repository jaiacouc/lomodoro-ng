import { Component } from '@angular/core';
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
    standalone: true,
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
    ],
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
    {
      name: 'Option 3',
      link: '',
      selected: false,
    },
  ];
  public menuOpened: boolean = false;
  public theme: Themes = Themes.Light;

  constructor(private _themeService: ThemeService) {}

  public openMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  public closeBackDrop(): void {
    this.menuOpened = false;
  }

  public changeTheme(): void {
    if (this.theme === Themes.Light) {
      this.theme = Themes.Dark;
      this._themeService.updateTheme(Themes.Dark);
    } else {
      this.theme = Themes.Light;
      this._themeService.updateTheme(Themes.Light);
    }
  }

  public menuItemSelected(menuItem: MenuOption): void {
    this.clearMenuSelections();
    menuItem.selected = true;
  }

  private clearMenuSelections(): void {
    this.menuOptions.map((item) => (item.selected = false));
  }
}
