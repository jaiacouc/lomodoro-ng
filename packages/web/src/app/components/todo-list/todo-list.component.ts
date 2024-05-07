import { CdkDragDrop, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, WritableSignal, signal } from '@angular/core';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { NgFor } from '@angular/common';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [CdkDropListGroup, MatList, CdkDropList, NgFor, TodoListItemComponent, CdkDrag],
})
export class TodoListComponent {
  public todoList: WritableSignal<string[]> = signal(['mow the yard', 'take out the trash']);
  public inProgressList: WritableSignal<string[]> = signal(['code todo list for pomodoro']);
  public doneList: WritableSignal<string[]> = signal(['make timer', 'make navigation']);

  public dropHandler(droppedItem: CdkDragDrop<WritableSignal<string[]>>): void {
    transferArrayItem(
      droppedItem.previousContainer.data(),
      droppedItem.container.data(),
      droppedItem.previousIndex,
      droppedItem.currentIndex,
    );
  }
}
