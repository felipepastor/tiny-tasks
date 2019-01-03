import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  lastId = 0;
  tasks: Task[];
  LOCAL_STORAGE = 'localTasks';

  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem(this.LOCAL_STORAGE)) || [];
  }

  addTask(task: Task): TaskDataService {
    if (!task.id) {
      task.id = ++this.lastId;
    }

    this.tasks.push(task);

    window.localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this.tasks));

    return this;
  }

  deleteTaskById(task: Task): TaskDataService {
    // A delay to see the animation
    setTimeout(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.updateTask(task);
    }, 400);

    return this;
  }

  updateTask(task: Task) {
    this.tasks.map(t => {
      if (t.id === task.id) {
        t = task;
      }
      return t;
    });

    window.localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(this.tasks));

    return this;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  toogleTaskStatus(task: Task) {
    this.tasks = this.tasks.map(t => {
      if (task.id === t.id) {
        t.done = !t.done;
      }
      return t;
    });

    this.updateTask(task);
  }

  clearTasks() {
    this.tasks = [];
    return this;
  }
}
