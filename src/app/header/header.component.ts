import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { User } from '../_model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  customDate: number = Date.now();
  currentUser!: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(
      x => this.currentUser = x);
  }

  ngOnInit(): void {
  }
  logout() {
    console.log('user logged',this.currentUser);
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}