import { Component } from '@angular/core';
import { MenuOption } from '../shared/models/menu-option-model';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {
  public menuOptions: MenuOption[] = [
    {
      name: 'Pomodoro Timer',
      link: 'pomodoro-component',
      selected: true,
    },
    {
      name: 'About',
      link: '',
      selected: false,
    },
    {
      name: 'Option 3',
      link: '',
      selected: false,
    },
  ];
  public menuOpened: boolean = false;
  public darkMode: boolean = false;

  public openMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  public closeBackDrop(): void {
    this.menuOpened = false;
  }

  public activateDarkMode(): void {
    this.darkMode = !this.darkMode;
  }

  public menuItemSelected(menuItem: MenuOption): void {
    this.clearMenuSelections();
    menuItem.selected = true;
  }

  private clearMenuSelections(): void {
    this.menuOptions.map((item) => (item.selected = false));
  }
}
