import { Component,AfterViewInit,ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { JsondataService } from '../jsondata.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements AfterViewInit {
  page: number = 1;

  posts: any;
  displayedColumns =['title','userId'];
datasource = new MatTableDataSource();
@ViewChild(MatSort, { static: false}) sort!: MatSort;
  constructor(private service: JsondataService) { }
  
  ngAfterViewInit():void{
    this.getList();
  }

  getList() {
    this.service.getPosts().subscribe(
      (data: any) => {
        console.log(data);
        this.datasource.data=data;
        this.datasource.sort = this.sort;
        console.log('sort', this.sort);

      }
    )
  }

}
