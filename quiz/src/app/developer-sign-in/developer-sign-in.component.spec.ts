import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSignInComponent } from './developer-sign-in.component';

describe('DeveloperSignInComponent', () => {
  let component: DeveloperSignInComponent;
  let fixture: ComponentFixture<DeveloperSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
