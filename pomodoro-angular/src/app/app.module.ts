import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterNewUserComponent,
    PomodoroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
