import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitTestComponent } from './exit-test.component';

describe('ExitTestComponent', () => {
  let component: ExitTestComponent;
  let fixture: ComponentFixture<ExitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
