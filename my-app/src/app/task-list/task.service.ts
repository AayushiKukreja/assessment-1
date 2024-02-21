import { Task } from '../task.model';
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Complete the angular course',
      status: 'To Do',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Reading',
      status: 'In Progress',
    },
    { id: 3, title: 'Task 3', description: 'Cooking', status: 'Done' },
  ];

  getTask() {
    return this.tasks;
  }
  getTaskById(id: number): Task | null {
    const task = this.tasks.find((task) => task.id === id);
    return task ? task : null;
  }
}
