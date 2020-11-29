import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './presentation/views/login/login.component';
import { RegisterNewUserComponent } from './presentation/views/register-new-user/register-new-user.component';
import { PomodoroComponent } from './presentation/views/pomodoro/pomodoro.component';
import { HomeWrapperComponent } from './presentation/views/home-wrapper/home-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterNewUserComponent,
    PomodoroComponent,
    HomeWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
