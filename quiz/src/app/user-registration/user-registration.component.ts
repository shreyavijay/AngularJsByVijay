import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe( params => {
      console.log('userreg params', params['userId']);
      this.user = this.userService.getUser(params['userId']);
        }
      );
    console.log('UserRegistrationComponent', JSON.stringify(this.user));
    
  }

  onSubmit(): void {
    console.log('Printing Registered User ', JSON.stringify(this.user));
  }  

}
