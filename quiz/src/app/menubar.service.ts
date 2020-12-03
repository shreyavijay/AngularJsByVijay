import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenubarService {

  constructor() { }

  // OBservable String
  private displayNavPanel = new Subject<boolean>();

  displayNavPanel$ = this.displayNavPanel.asObservable();

  //toggledisplay
  hideVerticalNavPanel(displayPanel: boolean) {
    this.displayNavPanel.next(displayPanel);
  }

}
