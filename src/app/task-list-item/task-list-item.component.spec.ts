import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TaskListItemComponent } from './task-list-item.component';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatIconModule, MatListModule } from '@angular/material';

describe('TaskListItemComponent', () => {
  let component: TaskListItemComponent;
  let fixture: ComponentFixture<TaskListItemComponent>;

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
      declarations: [TaskListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent);
    component = fixture.componentInstance;
    component.task = new Task({ id: 1, title: 'Test task', done: false });
    fixture.detectChanges();
  });

  it('should create TaskListItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have class done if the task is complete', () => {
    component.task = new Task({ id: 1, title: 'Test task', done: true });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.done')).not.toBeNull();
  });

  it('should not have class done if the task is complete', () => {
    component.task = new Task({ id: 1, title: 'Test task', done: false });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.done')).toBeNull();
  });
});
