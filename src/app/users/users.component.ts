import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { observable, throwError } from 'rxjs';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']

})
export class UsersComponent implements OnInit {
   page = 1;
  users: any;
  constructor(private data: JsondataService,
    private router: Router) {
      
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.data.getUserList().subscribe(
      (data: any) => {
        this.users = data;
        console.log('message', data);
        this.localUser();
      }
    );
  }

  localUser() {

    let dataList: any = localStorage.getItem('users');
    console.log('datalist', dataList);
    if (dataList != undefined && dataList != null) {
      dataList = JSON.parse(dataList);
      for (let i = 0; i < dataList.length; i++) {

        let rowData = {
          name: dataList[i].name,
          id: dataList[i].id,
          address: dataList[i].address,
          email: dataList[i].email,
          phone: dataList[i].phone,
        };
        this.users.push(rowData);
        console.log(this.users);
      }
    }
  }
  userDetails(usersId: any) {
    this.router.navigateByUrl('/user-details/' + usersId);
  }
  
 
  // onSortClick(event: { currentTarget: any; }) {
  //   let target = event.currentTarget,
  //     classList = target.classList;

  //   if (classList.contains('fa-chevron-up')) {
  //     classList.remove('fa-chevron-up');
  //     classList.add('fa-chevron-down');
  //     this.sortDir = -1;
  //   } else {
  //     classList.add('fa-chevron-up');
  //     classList.remove('fa-chevron-down');
  //     this.sortDir = 1;
  //   }
  //   this.sortArr('address');
  // }

  // sortArr(colName: any) {
  //   this.users.sort((a:any,b:any)=> {
  //     a = a[colName].toLowerCase();
  //     b = b[colName].toLowerCase();
  //     return a.localeCompare(b) * this.sortDir;
  //   });
  // }
}

