import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Test } from '../test';
import { Question } from '../questions';
import { AccordionService } from '../accordion.service';
import { switchMap } from 'rxjs/operators';
import { Action } from '../action';



@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
  // questions: Question[] ;
  addQuestion: Boolean;
  modifyQuestion: Boolean;
  // testName: string;
  action: Action;
  constructor(private route: ActivatedRoute,
              private questionService: QuestionsService,
              private accordionService: AccordionService) { }

  ngOnInit() {
    this.accordionService.initializeAccordion();
    this.action = new Action();
    this.route.queryParams.subscribe(params => 
       this.action.testName = params['testName']

    );
  }

  loadQuestions(): Question[] {
    return this.questionService.getQuestions(
          this.action.testName ? this.action.testName : '');
  }

  addEditQuestion(question: any) : void {
    if(question) {
      this.modifyQuestion = true;
      this.action.questionId = question.id;
    } else {
      this.action.questionId = null;
      this.addQuestion = true;
    }
    console.log('Question',question);
  }

  oncloseModal(close: boolean) {
    this.addQuestion = !close;
    this.modifyQuestion = !close;
    this.accordionService.initializeAccordion();
    this.loadQuestions();
  }

}
