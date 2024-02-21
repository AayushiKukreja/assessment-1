import { Component } from '@angular/core';
import { TaskService } from '../task-list/task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  status: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    const newTask: Task = {
      id: Math.random(),
      title: this.title,
      description: this.description,
      status: this.status,
    };

    // this.taskService.createTask(newTask).subscribe(
    //   (task) => {

    //     console.log('Task created:', task);
    //   },
    //   (error) => {

    //     console.error('Error creating task:', error);
    //   }
    // );
  }
}
