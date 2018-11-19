import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';
import { Test } from '../test';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  test: Test;
  activateModal: Boolean;
  didClose = false;
  @Output() closeCreateTestModal = new EventEmitter<boolean>();
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.test = this.testService.getNewTest();
    this.activateModal = true;
  }

  closeModal(): void {
    // this.activateModal = false;
    this.closeCreateTestModal.emit(true);
    this.didClose = true;
  }

  onSubmit(): void {
    console.log('Printing Signup User ', JSON.stringify(this.test));
    this.testService.addTest(this.test);
    this.closeModal();
    // this.route.navigateByUrl('/register/' + this.user.companyEmail);
    // window.open('Registration.html')
  }
}
