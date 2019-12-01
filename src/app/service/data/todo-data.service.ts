import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }


retrieveAllTodos(username) {
  return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
}

retreiveOneTodo(username, id){
  return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
}

deleteOneTodo(username, id){
  return this.httpClient.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
}

updateOneTodo(username, id, todo){
  return this.httpClient.put<Todo>(
    `http://localhost:8080/users/${username}/todos/${id}`,
     todo);
}

createTodo(username, todo){
  return this.httpClient.post<Todo>(
    `http://localhost:8080/users/${username}/todos`,
     todo);
}












}
