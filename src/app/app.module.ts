import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MyRoutingModule } from "app/router";
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
