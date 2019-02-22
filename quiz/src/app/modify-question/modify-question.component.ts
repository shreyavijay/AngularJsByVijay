import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

import { QuestionsService } from '../questions.service';
import { Question } from '../questions';
import { Test } from '../test';
import { Action } from '../action';


@Component({
  selector: 'app-modify-question',
  templateUrl: './modify-question.component.html',
  styleUrls: ['./modify-question.component.css']
})
export class ModifyQuestionComponent implements OnInit {
  question: Question;
  activateModal: Boolean;
  editAction: Boolean;
  // @Input('test') testName: string;
  // @Input('question') questionId: string;
  @Input() action: Action;
  @Output() closeModifyQuestionModal = new EventEmitter<boolean>();
  constructor(private questionsService: QuestionsService,
    private fb: FormBuilder) { }

  questionForm = this.fb.group({
    question: ['question'],

    aliases: this.fb.array([
      this.fb.group({
        answer: ['answer1'],
        deleteButton: ['Delete']
      })
    ])
  });

  get aliases() {
    return this.questionForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.group({
      answer: ['answer1'],
      deleteButton: ['Delete']
    }));
  }



  ngOnInit() {
    console.log('ModifyQuestionComponent print testName11', this.action.testName + ' ' + this.action.questionId);
    this.editAction = this.action.testName && this.action.questionId ? true : false;
    if (this.action.testName && this.action.questionId) {
      this.populateQuestion();
    }
    this.activateModal = true;
  }

  populateQuestion() {
    let question = this.questionsService.getQuestion(this.action.testName, this.action.questionId);
    //Remove Default selections for Edit scenario
    if (this.aliases.length > 0) {  
      for (let count = this.aliases.length - 1; count >= 0; count--) {
        this.aliases.removeAt(count);
      }
    }
    this.questionForm.controls.question.setValue(question.questionDescription);
    question.answers.map(answer => this.aliases.push(this.fb.group({
      answer: [answer],
      deleteButton: ['Delete']
    })));
    question.answers = this.questionForm.value.aliases.map(alias => alias.answer);
  }

  closeModal(): void {
    this.closeModifyQuestionModal.emit(true);
  }

  onDelete(): void {
  }

  onSubmit(): void {
    console.log('Printing Question ', this.questionForm.value.question);
    console.log('Printing Answer ', this.questionForm.value.aliases[1]);
    let question: Question = this.questionsService.getNewQuestion();
    let answers: string[];
    question.testName = this.action.testName;
    question.questionDescription = this.questionForm.value.question;
    question.answers = this.questionForm.value.aliases.map(alias => alias.answer);
    console.log('Printing complete Question Saved ', question);    
    //Action = Edit
    if(this.action.questionId) {
      question.id = this.action.questionId;
      this.questionsService.editQuestion(question);
    } else {
      //Action = Add
      this.questionsService.addQuestion(question);
    }
    this.closeModal();

  }
}
