import { Injectable } from '@angular/core';
import { Question } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    {testName: 'Java8 Online Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'1111'},
    {testName: 'Javascript ES6 Fundamentals Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'2222'},
    {testName: 'HTML CSS3 and Javascript' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'3333'},
    {testName: 'AngularJS Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'4444'},
    {testName: 'Angular Material Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'5555'},
    {testName: 'React Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'6666'}
  ];

  constructor() { }

  getQuestions(testName: string): Question[] {
    return this.questions && this.questions.length > 0 ? this.questions.filter(question => 
          question.testName.indexOf(testName) > -1): null;
  }

  getQuestion(testName: string, questionId: string): Question {
    let questions: Question[] = this.questions && this.questions.length > 0 ? this.questions.filter(question => 
            question.testName.indexOf(testName) > -1 && question.id.indexOf(questionId) > -1) : null ;
    return questions && questions.length > 0 ? questions[0] : null;       
  }

  //Add new question
  addQuestion(question: Question) : void {
    console.log('Question Service ID',new Date().getTime());
    question.id = new Date().getTime().toString();
    this.questions.push(question);
  }

  getNewQuestion(): Question {
    return new Question(' ',' ',[],' ');
  }

  editQuestion(modifiedQuestion: Question) : void {
    let questions: Question[] =  this.questions.filter(question => 
      modifiedQuestion && question.id == modifiedQuestion.id
    );
    if(questions.length > 0) {
      questions[0].questionDescription = modifiedQuestion.questionDescription;
      questions[0].choice = modifiedQuestion.choice;
    }
  }


}
