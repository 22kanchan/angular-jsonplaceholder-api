import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { JsondataService } from '../jsondata.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  page : number =1;
  photos:any;
  constructor(private data: JsondataService ) { }

  ngOnInit(){
    this.data.getPhotos().subscribe(
      (data: any) => this.photos = data
    )
  }

}
