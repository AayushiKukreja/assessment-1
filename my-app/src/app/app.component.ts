import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TaskService } from './task-list/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService],
})
export class AppComponent {}
