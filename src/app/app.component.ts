import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { JsondataService } from './jsondata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['title', 'actions'];
  dataSource = new MatTableDataSource();
  
  title = 'angular-app-jsonapi';
  constructor( private service: JsondataService ) {

  }

ngOnInit() {
  this.service.getPosts().subscribe((res: any)=>{
    this.dataSource.data = res;
    this.dataSource.sort = this.sort;
    console.log('sort', this.sort);
  });
}
  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
}
