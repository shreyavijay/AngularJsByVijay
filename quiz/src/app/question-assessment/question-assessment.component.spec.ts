import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssessmentComponent } from './question-assessment.component';

describe('QuestionAssessmentComponent', () => {
  let component: QuestionAssessmentComponent;
  let fixture: ComponentFixture<QuestionAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
