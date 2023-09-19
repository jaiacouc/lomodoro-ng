import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  imports: [CommonModule, MaterialModule, DragDropModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
