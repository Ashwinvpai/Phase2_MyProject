import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {QuizComponent} from './quiz/quiz.component';


export const myrouting = RouterModule.forRoot([
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent},
])
