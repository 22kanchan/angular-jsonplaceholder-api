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
console.log('hiiiiiiiiiiiiiiiiiiiiiiiiii');
   }

  ngOnInit(){
   
    console.log('helloooooooo');
    this.getUserList();
  }

  getUserList(){
    this.data.getUserList().subscribe(
      (data: any) => {this.users = data;
      console.log('message',data);
      this.localUser();
      }
    );
  }

  localUser(){
    
    let dataList:any = localStorage.getItem('users');
    if(dataList!=undefined && dataList!=null){
      dataList = JSON.parse(dataList);
      for(let i= 0; i< dataList.length;i++)
      {
        let rowData={name:dataList[i].name,
                     id:dataList[i].id,
                     email:dataList[i].email,
                     phone:dataList[i].phone,
                     address:dataList[i].address}
        this.users.push(rowData);
        console.log(this.users);
      }
    }
  }
  userDetails(usersId:any){
    this.router.navigateByUrl('/user-details/'+usersId);
  }

}

