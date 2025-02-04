import { Component } from '@angular/core';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TimerComponent } from '../components/timer/timer.component';

@Component({
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.component.html',
    styleUrls: ['./pomodoro.component.scss'],
    imports: [TimerComponent, TodoListComponent]
})
export class PomodoroComponent {

}
