import { LogoutComponent } from './logout/logout.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'welcome/:username', component: WelcomeComponent
  },
  {
    path:'todos', component: ListTodoComponent
  },
  {
    path:'**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
