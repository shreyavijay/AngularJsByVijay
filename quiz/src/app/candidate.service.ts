import { Injectable } from '@angular/core';
import { Developer, DeveloperResponse } from './developer';
import { TestService } from './test.service';
import { QuestionsService } from './questions.service';
import { Question } from './questions';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private developers: Developer[]=[];
  constructor(private testSrvc: TestService,
              private questionSrvc: QuestionsService) { }

  //PErforms ADD/EDIT operation
  addCandidate(developer: Developer) : void {
    //Add Scenario
    if(!this.developerExists(developer)) {
      this.developers.push(developer);
    } else {
      //Edit Scenario
      let slctdDeveloper:Developer = (developer.email) ?
        this.developers.filter(dev => dev.email == developer.email) [0] : null;
       slctdDeveloper.firstName =  developer.firstName;
       slctdDeveloper.lastName = developer.lastName;
       slctdDeveloper.mobile = developer.mobile;
       slctdDeveloper.testName = developer.testName; 
    }
    
    this.testSrvc.addDeveloperToTest(developer);
  }

  getCandidate(email: string): Developer {
    let candidate:Developer[] =  this.developers.filter(dev => dev.email == email);
    return candidate.length > 0 ? candidate[0] : null;
  }

  developerExists(developer: Developer): Boolean {
    // let exists = this.developers.findIndex(dev => dev.firstName == developer.firstName 
    //                               && dev.lastName == developer.lastName);
    let exists = this.developers.findIndex(dev => dev.email == developer.email);
  
    if(exists == -1) {
      return false;
    }
    return true;                                  
  }
  
  getAllDevelopers(): Developer[] {
    return this.developers;
  } 

  authenticateCandidate(username: string, passwd: string): Boolean {
    //Username of the Candidate is nothing but email & passwd is nothing but mobile number
    let developer:Developer = this.getCandidate(username);
    return developer && developer.mobile == passwd;
  }

  captureResponse(devResponse: DeveloperResponse, 
                  candidate: Developer) {
    let developer:Developer = candidate && candidate.email ? this.getCandidate(candidate.email) : null;
    let add = developer 
                && devResponse 
                && devResponse.questionId
                && devResponse.answer
                && candidate.testName == developer.testName
                && developer
                && developer.developerResponse
                && developer.developerResponse.findIndex(dev => dev.questionId == devResponse.questionId) ==  -1;                    
    if(add) {
      //Filter -1
      devResponse.answer = devResponse.answer.filter(ans => ans != -1);
      developer.developerResponse.push(devResponse);
    } 
  }

  evaluateAssessement(candidate: Developer): number {
    let developer: Developer = candidate && candidate.email ? this.getCandidate(candidate.email) : null;
    let questions: Question[] = developer.testName ? this.questionSrvc.getQuestions(developer.testName) : null;
    let proceedWithEvaluation = (developer && developer.developerResponse && developer.developerResponse.length > 0)
                                  && (questions && questions.length > 0);
    let score = 0;
    if(proceedWithEvaluation) {
      questions.forEach(question => {
        //Check If developer has answered Question
        let devResponseQuestionArray = developer.developerResponse.filter(devRes => devRes.questionId == question.id);
        let devResponseQuestion;
        if(devResponseQuestionArray.length >= 1) {
          devResponseQuestion = devResponseQuestionArray[0];
        }
        let correctAnswer = true;
        question.answer.forEach(answer => {
          if(answer > -1) {
            if(devResponseQuestion.answer.findIndex(item => item == answer) == -1){
              correctAnswer = false;
            }

          }

        });
        if(correctAnswer) {
          score++;
        }
      })
    }
    developer.developerResponse = [];
    let finalScore:number = (score/questions.length) * 100;
    developer.score = finalScore;
    return finalScore;

  }
    
}

