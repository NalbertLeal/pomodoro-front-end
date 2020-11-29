import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeWrapperComponent } from './presentation/views/home-wrapper/home-wrapper.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { RegisterNewUserComponent } from './presentation/views/register-new-user/register-new-user.component';
import { PomodoroComponent } from './presentation/views/pomodoro/pomodoro.component';
  
const routes: Routes = [
  {path : '', component : HomeWrapperComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register-new-user', component : RegisterNewUserComponent},
  {path : 'pomodoro', component : PomodoroComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }