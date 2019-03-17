import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { LoginService } from '../login.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-exit-test',
  templateUrl: './exit-test.component.html',
  styleUrls: ['./exit-test.component.css']
})
export class ExitTestComponent implements OnInit {
  
  constructor(private candidateSrvc: CandidateService,
              private loginSrvc: LoginService) { }

  ngOnInit() {
  }

  retrieveScore(): number {
    let userLoggedIn: Developer = this.loginSrvc.getUserSignedIn();
        let dev = this.candidateSrvc.getCandidate(userLoggedIn.email);
    return dev && dev.score ? dev.score : 0;
  }

  onSubmit(): void {
    this.loginSrvc.signOut();
  }
}
