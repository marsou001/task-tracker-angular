import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  toggleReminder(task: Task): Observable<Task> {
    const toggleReminderUrl = `${this.apiURL}/${task.id}`;
    return this.http.patch<Task>(toggleReminderUrl, {
      reminder: !task.reminder
    }, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }
}