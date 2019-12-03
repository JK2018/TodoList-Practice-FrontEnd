import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }


retrieveAllTodos(username) {
  return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
}

retreiveOneTodo(username, id){
  return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
}

deleteOneTodo(username, id){
  return this.httpClient.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
}

updateOneTodo(username, id, todo){
  return this.httpClient.put<Todo>(
    `${API_URL}/users/${username}/todos/${id}`,
     todo);
}

createTodo(username, todo){
  return this.httpClient.post<Todo>(
    `${API_URL}/users/${username}/todos`,
     todo);
}












}
