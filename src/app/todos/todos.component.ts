import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 todos : any;
 page:number=1;
  constructor(private data: JsondataService) { }

  ngOnInit(){
    this.data.gettodos().subscribe(
      (data: any) => this.todos = data
    )
  }

}
