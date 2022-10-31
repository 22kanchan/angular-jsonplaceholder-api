import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  usersId: any;
  activeTab: any = 0;
  dataList: any;
  page: number = 1;
  constructor(private data: JsondataService,
    private route: ActivatedRoute,
  ) {
    this.usersId = this.route.snapshot.url;
    this.usersId = this.usersId[1].path;
    // console.log("hello",this.usersId);

  }
  getDataList(activeTab: number) {
    this.data.getUsersDetails(activeTab, this.usersId).subscribe(
      (data: any) => {
        this.dataList = data;
        // console.log("tabs",this.dataList);
      }
    );
  }
  ngOnInit() {
    // this.usersId = this.route.snapshot.params['usersId'];
    console.log(this.usersId);
    // this.posts = this.data.getUsersDetails();
    this.getDataList(this.activeTab);
  }

}
