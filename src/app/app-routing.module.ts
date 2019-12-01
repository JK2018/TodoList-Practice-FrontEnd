import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]
  },
  {
    path:'welcome/:username', component: WelcomeComponent, canActivate:[RouteGuardService]
  },
  {
    path:'todos', component: ListTodoComponent, canActivate:[RouteGuardService]
  },
  {
    path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]
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
