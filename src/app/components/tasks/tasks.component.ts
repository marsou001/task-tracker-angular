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

  toggleReminder(task: Task): void {
    this.taskService.toggleReminder(task).subscribe(() => {
      const taskToToggleReminder = this.tasks.find((t) => t.id === task.id);
      if (!taskToToggleReminder) return;
      taskToToggleReminder.reminder = !taskToToggleReminder?.reminder;
    })
  }
  
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }
}
