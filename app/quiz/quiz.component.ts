import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  result:number=0;
  answers = {
    ans1: 'False',
    ans2: 'Encapsulation',
    ans3: 'PolyMorphism',
    ans4: 'False',
    ans5: 'Protected'

  }
  constructor() { }

  ngOnInit(): void {
  }
  addtoarray(nf: NgForm){
    var ansgiven = nf.value;
    if(ansgiven.ans1 == this.answers.ans1){
      this.result += 1;
    };
    if(ansgiven.ans2 == this.answers.ans2){
      this.result += 1;
    };
    if(ansgiven.ans3 == this.answers.ans3){
      this.result += 1;
    };
    if(ansgiven.ans4 == this.answers.ans4){
      this.result += 1;
    };
    if(ansgiven.ans5 == this.answers.ans5){
      this.result += 1;
    }
    
    alert("Your score is "+ this.result + " out of 5");

  };
}
