import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { observable,throwError } from 'rxjs';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
  
})
export class UsersComponent implements OnInit {

  page =1;
  users: any;
 
  constructor(private data: JsondataService,
    private router:Router) {

   }

  ngOnInit(){
    this.data.getUsers().subscribe(
      (data: any) => this.users = data,

    );
  }
  userDetails(usersId:any){
    this.router.navigateByUrl('/user-details/'+usersId);
  }

}

