import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  onAddTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => this.tasks = [...this.tasks, task]);
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe()
  }
  
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }
}
