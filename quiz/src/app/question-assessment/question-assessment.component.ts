import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../questions';
import { FormBuilder, FormArray } from '@angular/forms';
import { DeveloperResponse } from '../developer';
import { CandidateService } from '../candidate.service';
import { TestService } from '../test.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-question-assessment',
  templateUrl: './question-assessment.component.html',
  styleUrls: ['./question-assessment.component.css']
})
export class QuestionAssessmentComponent implements OnInit {
  @Output() moveToNextQuestion = new EventEmitter<Boolean>();
  constructor(private fb: FormBuilder,
              private candidateSrvc: CandidateService,
              private loginSrvc: LoginService) { }
  @Input() question:Question;
  choicesLoaded: Boolean = false;  
  assessementForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.group({
        choiceDesc: [''],
        option: [false]
      })
    ])
  });

  get aliases() {
    return this.assessementForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fb.group({
      choiceDesc: [''],
      option: [false]
    }))
  }

  ngOnInit() {
    this.populateChoice(null);  
  }

  populateChoice(question: Question) {
    if(question){
      this.question = question;
    }
    //Remove Default selections for Edit scenario
    if (this.aliases.length > 0) {  
      for (let count = this.aliases.length - 1; count >= 0; count--) {
        this.aliases.removeAt(count);
      }
    }
    this.question.choice.map(choiceDescription => {
      this.aliases.push(this.fb.group({
      choiceDesc: [choiceDescription],
      option: [false]
    }));
  });
//   if(this.question.answer && this.question.answer.length > 0  ) {
//     this.question.answer.forEach(answer => {
//       if(answer < this.question.choice.length) {
//         // this.aliases[answer].answer.setValue(true);
//         if(answer >= 0) {
//           // console.log('this.aliases.at(answer)',this.aliases.at(answer).controls.answer.setValue(true));
//           this.aliases.at(answer).controls.answer.setValue(true)
//         }
//       }
//     }); 
    
//  }  
  this.choicesLoaded = true;
  console.log('PopulateChoice ',this.aliases);
  }

  nextQuestion() {
    let count = 0;
    let devResponse = new DeveloperResponse();
    devResponse.questionId = this.question ? this.question.id : null;
    devResponse.answer = this.assessementForm.value.aliases.map(alias => {
     
      let chosenAnswer = alias.option ? count : -1;
      // devResponse.answer.push(chosenAnswer);
      count++;
      return chosenAnswer;
      // return alias.option ? 
    });
    this.candidateSrvc.captureResponse(devResponse,this.loginSrvc.getUserSignedIn());
    this.moveToNextQuestion.emit(true);
  }

  captureResponse(answer: any) {
    console.log('Developer Response for Question', answer);
  }
}
