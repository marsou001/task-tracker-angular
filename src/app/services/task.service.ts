import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const re = this.http.get<Task[]>(this.apiURL);
    console.log(re);
    
    return re;
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }
}
