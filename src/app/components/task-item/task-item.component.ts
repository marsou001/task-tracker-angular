import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task = {} as Task;
  @Output() onToggleReminder = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDblClick(task: Task): void {
    this.onToggleReminder.emit(task)
  }

  onDeleteTask(task: Task): void {
    this.onDelete.emit(task);
  }
}
