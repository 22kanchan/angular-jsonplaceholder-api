import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsondataService } from '../jsondata.service';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  page : number =1;
  // pageSize =10;
  albums:any;
  searchText='';

  constructor(private data: JsondataService) { }

  ngOnInit(){
    this.data.getAlbums().subscribe(
      (data: any) => this.albums = data
      // .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
    )
  }

}
