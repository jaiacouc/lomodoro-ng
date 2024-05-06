import { Component, Input } from '@angular/core';
import { MatListItem } from '@angular/material/list';

@Component({
    selector: 'todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss'],
    standalone: true,
    imports: [MatListItem],
})
export class TodoListItemComponent {
  @Input() name: string = '';
}
