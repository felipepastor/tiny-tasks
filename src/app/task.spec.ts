import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const task = new Task({
      title: 'first task',
      done: true
    });
    expect(task.title).toEqual('first task');
    expect(task.done).toEqual(true);
  });
});
