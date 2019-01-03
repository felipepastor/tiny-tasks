export class Task {
  id: number;
  title: String = '';
  done: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
