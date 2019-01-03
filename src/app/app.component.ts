import { Component, OnInit } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Task } from './task';

@Component({
  selector: 'tiny-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskDataService]
})
export class AppComponent {
  newTask = new Task();

  constructor(private taskDataService: TaskDataService) {
    this.taskDataService = taskDataService;
  }

  add() {
    if (this.newTask.title === '') {
      // I know it's ugly.
      alert('Please fill a task title');
      return;
    }

    this.taskDataService.addTask(this.newTask);
    this.newTask = new Task();
  }

  get tasks() {
    return this.taskDataService.getAllTasks();
  }

  onToggleTaskDone(task: Task) {
    this.taskDataService.toogleTaskStatus(task);
  }

  onRemoveTask(task: Task) {
    this.taskDataService.deleteTaskById(task);
  }

  onUpdate(task: Task) {
    this.taskDataService.updateTask(task);
  }

  clear() {
    this.taskDataService.clearTasks();
  }
}
