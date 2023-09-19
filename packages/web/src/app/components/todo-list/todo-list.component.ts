import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todoList: string[] = ['mow the yard', 'take out the trash'];
  public inProgressList: string[] = ['code todo list for pomodoro'];
  public doneList: string[] = ['make timer', 'make navigation'];

  public dropHandler(droppedItem: CdkDragDrop<string[]>): void {
    transferArrayItem(
      droppedItem.previousContainer.data,
      droppedItem.container.data,
      droppedItem.previousIndex,
      droppedItem.currentIndex,
    );
  }
}
