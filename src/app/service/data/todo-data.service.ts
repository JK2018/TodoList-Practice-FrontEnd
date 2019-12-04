import { TODO_JPA_API_URL } from "./../../app.constants";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "src/app/list-todo/list-todo.component";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  constructor(private httpClient: HttpClient) {}

  //Observables:
  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos`
    );
  }

  retreiveOneTodo(username, id) {
    return this.httpClient.get<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  deleteOneTodo(username, id) {
    return this.httpClient.delete<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  updateOneTodo(username, id, todo) {
    return this.httpClient.put<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username, todo) {
    return this.httpClient.post<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo
    );
  }
}
