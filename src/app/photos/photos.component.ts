import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, fromEvent, Observable } from 'rxjs';
import { map , take } from 'rxjs/operators';
import { JsondataService } from '../jsondata.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 10;
  constructor(private dataService: JsondataService) { }

  ngOnInit() {
    this.getPhotos();
  }

  private getPhotos(){
    this.dataService.getPhotos(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.obsArray.next(data);
    });
 
    const content = document.querySelector('.items');
    const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));
 
    scroll$.subscribe((scrollPos) => {
      let limit = content!.scrollHeight - content!.clientHeight;
      if (scrollPos === limit) {
        this.currentPage += this.pageSize;
        console.log('currentPage',this.currentPage);
        forkJoin([this.items$.pipe(take(1)), this.dataService.getPhotos(this.currentPage, this.pageSize)]).subscribe((data: Array<Array<any>>) => {
          const newArr = [...data[0], ...data[1]];
          this.obsArray.next(newArr);
        });
      }
    });

  }
}
