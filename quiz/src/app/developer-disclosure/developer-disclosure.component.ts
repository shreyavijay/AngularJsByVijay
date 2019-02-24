import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-disclosure',
  templateUrl: './developer-disclosure.component.html',
  styleUrls: ['./developer-disclosure.component.css']
})
export class DeveloperDisclosureComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.route.navigateByUrl('/assessment');
  }

}
