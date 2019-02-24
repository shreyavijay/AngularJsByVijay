import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-question-assessment',
  templateUrl: './question-assessment.component.html',
  styleUrls: ['./question-assessment.component.css']
})
export class QuestionAssessmentComponent implements OnInit {
  @Output() moveToNextQuestion = new EventEmitter<Boolean>();
  constructor() { }
  @Input() question:Question;

  ngOnInit() {
  }

  nextQuestion() {
    this.moveToNextQuestion.emit(true);
  }

}
