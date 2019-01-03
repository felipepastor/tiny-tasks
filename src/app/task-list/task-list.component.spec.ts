import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskListComponent } from './task-list.component';
import { Task } from '../task';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatIconModule, MatListModule } from '@angular/material';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
      ],
      declarations: [
        TaskListComponent,
        TaskListItemComponent,
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = [
      new Task({ id: 1, title: 'Test123', done: false }),
      new Task({ id: 2, title: 'Test123', done: true })
    ];
    fixture.detectChanges();
  });

  it('should create TaskListComponent', () => {
    expect(component).toBeTruthy();
  });
});
