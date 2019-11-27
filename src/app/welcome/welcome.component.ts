import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  //inj activatedRoute in order to receive route parameter
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['username']; // will fetch all the passed params through the route/url
  }

}
