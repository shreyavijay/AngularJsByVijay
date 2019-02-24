import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionsService } from '../questions.service';
import { LoginService } from '../login.service';
import { Developer } from '../developer';
import { Question } from '../questions';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  questions: Question[];
  question: Question;
  index: number = 0;
  constructor(private loginSrvc: LoginService,
              private questionSrvc: QuestionsService) { }

  ngOnInit() {
    let developer: Developer = this.loginSrvc.getUserSignedIn();
    this.questions = this.questionSrvc.getQuestions(developer.testName);
    this.next(true);
  }


  next(moveNext:Boolean) {
    if(!moveNext) {
      return;
    }
    if(this.index < this.questions.length) {
      // this.question = (this.index + 1) < this.questions.length ? this.questions[] :]  
      this.question = this.questions[this.index] ;
    }
    this.index++;
  }

}
