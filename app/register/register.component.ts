import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../shared/register-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
constructor(private register1:RegisterService) { }

  ngOnInit(): void {
    
  }
  AddUser(nf : NgForm){
    this.register1.registertoDB(nf.value);
  }


}
