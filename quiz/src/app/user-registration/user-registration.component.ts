import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import { UserService } from '../user.service';
import { ScrollbarService } from '../scrollbar.service'
import { ActivatedRoute } from '@angular/router';
import { MenubarService} from '../menubar.service'
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,private userService: UserService,
    private menubarSvc:MenubarService,public scrollBarService: ScrollbarService) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe( params => {
      console.log('userreg params', params['userId']);
      this.user = this.userService.getUser(params['userId']);
        }
      );
    console.log('UserRegistrationComponent', JSON.stringify(this.user));
    
  }

  selectPackage(testPackage: string): void {
    this.user.package = testPackage;
  }


  onSubmit(): void {
    console.log('Printing Registered User ', JSON.stringify(this.user));
  }  

  hideVerNavbar(): void {
    //Set display to false
    this.menubarSvc.hideVerticalNavPanel(false);
  }

}
