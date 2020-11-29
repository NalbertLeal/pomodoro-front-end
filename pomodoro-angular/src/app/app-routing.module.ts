import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
  
const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register-new-user', component : RegisterNewUserComponent},
  {path : 'pomodoro', component : PomodoroComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }