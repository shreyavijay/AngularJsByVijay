import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';

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
        choice: [''],
        answer: [''],
        deleteButton: ['Delete']
      })
    ])
  });

  get aliases() {
    return this.questionForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.group({
      choice: [''],
      answer: [''],
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
    let index = 0;
    question.choice.map(choiceDesc => {
      this.aliases.push(this.fb.group({
      choice: [choiceDesc],
      answer: [false],
      deleteButton: ['Delete']
    }));
  });
  if(question.answer && question.answer.length > 0  ) {
    question.answer.forEach(answer => {
      if(answer < question.choice.length) {
        // this.aliases[answer].answer.setValue(true);
        if(answer >= 0) {
          // console.log('this.aliases.at(answer)',this.aliases.at(answer).controls.answer.setValue(true));
          let fg:FormGroup = <FormGroup>this.aliases.at(answer);
          fg.controls.answer.setValue(true);
        }
      }
    }); 
    this.questionForm.controls.question.setValue(question.questionDescription);
 }
    question.choice = this.questionForm.value.aliases.map(alias => alias.choice);
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
    question.choice = this.questionForm.value.aliases.map(alias => alias.choice);
    let index = 0;
    question.answer = this.questionForm.value.aliases.map(alias => {
      index++;
      if(alias.answer) {
        
        return (index-1);
      } 
      return -1;
      
    });
    this.questionForm.value.aliases.map(alias => {
      console.log('Anwer Choice',alias.answer);
    });
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
