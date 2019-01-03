import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'tiny-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input()
  tasks: Task[];

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleDone: EventEmitter<Task> = new EventEmitter();

  @Output()
  taskChange: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  onToggleTaskDone(task: Task) {
    this.toggleDone.emit(task);
  }

  onRemoveTask(task: Task) {
    this.remove.emit(task);
  }

  onUpdate(task: Task) {
    this.taskChange.emit(task);
  }

}
