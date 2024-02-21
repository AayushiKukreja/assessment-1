import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    // let task1: Task = {
    //   title: 'Task 1',
    //   description: 'Complete the angular course',
    //   status: 'To Do',
    // };
    // let task2: Task = {
    //   title: 'Task 2',
    //   description: 'Reading',
    //   status: 'In Progress',
    // };
    // let task3: Task = {
    //   title: 'Task 3',
    //   description: 'Cooking',
    //   status: 'Done',
    // };
    // this.tasks.push(task1, task2, task3);
    this.tasks = this.taskService.getTask();
  }

  getDetails(id: Number): void {
    this.router.navigate(['/tasks', id]);
  }

  editDetails(id: Number): void {
    this.router.navigate(['/edit-task', id]);
  }
}
