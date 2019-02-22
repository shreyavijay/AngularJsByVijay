import { Injectable } from '@angular/core';
import { Test } from './test';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  tests: Test[] = [ 
    {name: 'Java8 Online Assessment' , category: 'Online Code Assessment' , duration: 45, developers: []},
    {name: 'Javascript ES6 Fundamentals Assessment' , category: 'Online Code Assessment' , duration: 45, developers: []},
    {name: 'HTML CSS3 and Javascript' , category: 'Online Code Assessment' , duration: 45, developers: []},
    {name: 'AngularJS Assessment' , category: 'Online Code Assessment' , duration: 45, developers: []},
    {name: 'Angular Material Assessment' , category: 'Online Code Assessment' , duration: 45, developers: []},
    {name: 'React Assessment' , category: 'Online Code Assessment' , duration: 45, developers: []},
];

  constructor() { }

  getTest(testName: string) {
    return this.tests.length > 0 ? this.tests.filter(test => test.name.indexOf(testName) > -1)[0] : null;
  }

  getAllTests(): Test[] {
    return this.tests;
  }

  getNewTest() {
    return new Test();
  }

  addTest(test: Test): void {
    console.log('Test Added',test);
    this.tests.push(test);
  }

  //For Now it allows editing Developers only
  addDeveloperToTest(developer: Developer): void {
    let test: Test = this.getTest(developer.testName);
    // let match = test && test.developers ? test.developers.findIndex(dev => dev.firstName == developer.firstName && 
    //                                   dev.lastName == developer.lastName) : null;
    let match = test && test.developers ? test.developers.findIndex(dev => dev.email == developer.email) : null;                                      
    if(match == -1) {
      test.developers.push(developer);
    }                                      
  }

}



