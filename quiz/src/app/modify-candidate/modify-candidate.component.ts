import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../action';
import { FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Developer } from '../developer';
import { TestService } from '../test.service';

@Component({
  selector: 'app-modify-candidate',
  templateUrl: './modify-candidate.component.html',
  styleUrls: ['./modify-candidate.component.css']
})
export class ModifyCandidateComponent implements OnInit {
  activateModal: Boolean;
  editAction: Boolean;
  @Input() action: Action;
  @Output() closeModifyQuestionModal = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder,  
              private candidateSrvc: CandidateService,
              public testSrvc: TestService) { }

  candidateForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required],
    mobile: [''],
    testName: ['',Validators.required]
  });

  ngOnInit() {
    this.activateModal = true;
    if(this.action && this.action.developerEmail) {
      this.loadCandidate(this.action.developerEmail);
    }
  }

  closeModal(): void {
    this.closeModifyQuestionModal.emit(true);
  }

  loadCandidate(candidateEmail: string): void {
    console.log('candidateEmail loadCandidate ',candidateEmail );
    let dev:Developer = this.candidateSrvc.getCandidate(candidateEmail);
    this.candidateForm.controls.firstName.setValue(dev.firstName);
    this.candidateForm.controls.lastName.setValue(dev.lastName);
    this.candidateForm.controls.email.setValue(dev.email);
    this.candidateForm.controls.mobile.setValue(dev.mobile); 
    this.candidateForm.controls.testName.setValue(dev.testName);
  }

  onSubmit(): void {
    let candidate:Developer = new Developer();
    candidate.firstName = this.candidateForm.value.firstName;
    candidate.lastName = this.candidateForm.value.lastName;
    candidate.email = this.candidateForm.value.email;
    candidate.mobile = this.candidateForm.value.mobile;
    candidate.testName = this.candidateForm.value.testName;
    this.candidateSrvc.addCandidate(candidate);  
    this.closeModal();
  }

}

