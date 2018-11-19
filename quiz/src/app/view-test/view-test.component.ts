import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Test } from '../test';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {


  createTest: Boolean;
  selectedTest: any;
  tests: Test[] = [];
  testForm = this.fb.group({

    aliases: this.fb.array([
      this.fb.control('initial')
    ])
  });

  get aliases() {
    return this.testForm.get('aliases') as FormArray;
  }

  addAlias( name: string) {
    this.aliases.push(this.fb.control(name));
  }

  constructor(private fb: FormBuilder, 
              private testService: TestService,
              private route: Router) { }

  ngOnInit() {
    this.populateTests();
  }

  populateTests(): Test[] {
    return this.testService.getAllTests();
  }

  // populateTest1() {
  //   this.tests =[];
  //   this.tests = this.testService.getAllTests();
  //   this.aliases.removeAt(0);
  //   //Remove initial element
  //   let index = this.aliases.controls.findIndex(e=> e.value == 'initial');
  //   console.log('ViewTestComponent', index,this.tests);
  //   if(index > -1) {
  //     this.aliases.controls.splice(index,1);
  //   }
  //   this.tests.forEach(element => {
  //     this.addAlias(element.name);
  //   });
  // }

  openSelectedTest(selectedTestName: Test): void {
    console.log('selectedTestName',selectedTestName);
    this.route.navigate(['/managequestions'] , {queryParams: {testName: selectedTestName.name, testCategory: selectedTestName.category}});
  }


  oncloseModal(close: boolean) {
    this.createTest = !close;
    this.populateTests();
  }


}
