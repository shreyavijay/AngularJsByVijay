import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionsService } from '../questions.service';
import { LoginService } from '../login.service';
import { Developer } from '../developer';
import { Question } from '../questions';
import { CandidateService } from '../candidate.service';
import { QuestionAssessmentComponent } from '../question-assessment/question-assessment.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  questions: Question[];
  question: Question;
  index: number = 0;

  @ViewChild(QuestionAssessmentComponent)
  private questionComponent: QuestionAssessmentComponent;  
  displayQuestion: Boolean = true;
  exitTest: Boolean = false;
  constructor(private loginSrvc: LoginService,
              private questionSrvc: QuestionsService,
              private candidateSrvc: CandidateService) { }

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
      if(this.index > 0) {
        this.questionComponent.populateChoice(this.question);
      }
      // this.displayQuestion = !this.displayQuestion; 
      // this.displayQuestion = !this.displayQuestion;
    } else {
      this.displayQuestion = !this.displayQuestion;
      this.exitTest = true;
      this.candidateSrvc.evaluateAssessement(this.loginSrvc.getUserSignedIn());
    }
    this.index++;
  }

}
