import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'tiny-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent {
  @Input()
  task: Task;

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
