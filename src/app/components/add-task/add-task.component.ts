import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  @Output() addTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert("please fill text");
      return;
    }

    if (!this.day) {
      alert("please fill day");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.addTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
