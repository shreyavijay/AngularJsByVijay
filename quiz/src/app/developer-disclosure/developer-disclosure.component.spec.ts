import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDisclosureComponent } from './developer-disclosure.component';

describe('DeveloperDisclosureComponent', () => {
  let component: DeveloperDisclosureComponent;
  let fixture: ComponentFixture<DeveloperDisclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperDisclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
