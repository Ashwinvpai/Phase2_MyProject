import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {myrouting} from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from './shared/register-service';
import {HttpClientModule} from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    myrouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
