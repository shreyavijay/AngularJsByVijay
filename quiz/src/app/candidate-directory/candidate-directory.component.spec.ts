import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDirectoryComponent } from './candidate-directory.component';

describe('CandidateDirectoryComponent', () => {
  let component: CandidateDirectoryComponent;
  let fixture: ComponentFixture<CandidateDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
