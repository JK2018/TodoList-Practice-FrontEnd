import { Router } from "@angular/router";
import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from "@angular/core";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) {}
}

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"]
})
export class ListTodoComponent implements OnInit {
  todos = [];
  username = sessionStorage.getItem("authenticatedUser");
  message: string;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshTodos();
  }

  //show all todos to be displayed
  refreshTodos() {
    this.todoDataService.retrieveAllTodos(this.username).subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteOneTodo(id) {
    this.todoDataService
      .deleteOneTodo(this.username, id)
      .subscribe(response => {
        console.log(response);
        this.message = `Todo #${id} Successfully Deleted !`;
        this.refreshTodos();
      });
  }

  updateOneTodo(id) {
    this.router.navigate(["todos", id]);
  }

  addTodo() {
    this.router.navigate(["todos", -1]);
  }
}
