import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsondataService } from '../jsondata.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  page = 1;
  pageSize =10;
  albums:any;
  constructor(private data: JsondataService) { }

  ngOnInit(){
    this.data.getAlbums().subscribe(
      (data: any) => this.albums = data
    )
  }

}
