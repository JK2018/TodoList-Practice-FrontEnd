import { Component, OnInit } from '@angular/core';


export class Todo {

  constructor(public id:number, public description:string, public done : boolean, public targetDate : Date ) {}
}





@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todo1 = new Todo(1,'Learn how to code with Angular',false, new Date());
  todo2 = new Todo(2,'Deposit checks at the bank',false, new Date());
  todo3 = new Todo(3, 'Call your mom!',true, new Date());
  todo4 = new Todo(4, 'Buy a large turkey for thanksgiving',false, new Date());

  todos = [this.todo1,this.todo2,this.todo3,this.todo4];
/**
  todos = [
    {
    id: 1,
    description: 'Learn how to code with Angular'
    },
    {
      id: 2,
      description: 'Deposit checks at the bank'
      },
      {
        id: 3,
        description: 'Call your mom!'
        },
        {
          id: 4,
          description: 'Buy a large turkey for thanksgiving'
          }
];**/

  constructor() { }

  ngOnInit() {
  }

}
