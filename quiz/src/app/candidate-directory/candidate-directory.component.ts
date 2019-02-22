import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { Candidate } from '../candidate';
import { Action } from '../action';
import { CandidateService } from '../candidate.service';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-candidate-directory',
  templateUrl: './candidate-directory.component.html',
  styleUrls: ['./candidate-directory.component.css']
})
export class CandidateDirectoryComponent implements OnInit {
  addNewCandidate: Boolean;
  modifyCandidate: Boolean;
  action: Action;
  developers: Developer[] = [];
  constructor(private candidateSrvc: CandidateService
              ) { }

  ngOnInit() {
    this.action = new Action();

  }

  addEditCandidate(developer: any) : void {
    if(developer) {
      this.modifyCandidate = true;
      this.action.developerEmail = developer.email;
    } else {
      this.addNewCandidate = true;
    }
  }

  populateCandidateList() {
    this.developers = this.candidateSrvc.getAllDevelopers();
  }

  getCandidate(name: string): Developer {
    return (this.developers.length > 0 && name) ? 
      this.developers.filter(dev => (dev.firstName.trim() + dev.lastName.trim()) == name.trim())[0] : null ;
  }

  getNewCandidate(): Developer {
    return new Developer();
  }

  oncloseModal(close: boolean) {
    this.addNewCandidate = !close;
    this.modifyCandidate = !close;
    this.action.developerEmail = null;
    this.populateCandidateList();
    // this.loadQuestions();
  }

}
