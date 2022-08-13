import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../tasks';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + '/' + task.id);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + '/' + task.id, task, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
