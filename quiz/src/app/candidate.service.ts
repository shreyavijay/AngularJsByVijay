import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private developers: Developer[]=[];
  constructor(private testSrvc: TestService) { }

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
}
