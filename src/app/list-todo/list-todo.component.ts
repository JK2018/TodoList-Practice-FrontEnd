import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';


export class Todo {

  constructor(public id:number, public description:string, public targetDate : Date, public isDone : boolean ) {}
}






@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
/**
  todo1 = new Todo(1,'Learn how to code with Angular',false, new Date());
  todo2 = new Todo(2,'Deposit checks at the bank',false, new Date());
  todo3 = new Todo(3, 'Call your mom!',true, new Date());
  todo4 = new Todo(4, 'Buy a large turkey for thanksgiving',false, new Date());

  todos = [this.todo1,this.todo2,this.todo3,this.todo4];
**/

  todos = [];
  username = sessionStorage.getItem('authenticatedUser');

  constructor(private todoDataService : TodoDataService) { }

  ngOnInit() {
    //show all todos to be displayed
    this.todoDataService.retrieveAllTodos(this.username).subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    );
  }


  deleteOneTodo(id){

  }

}
