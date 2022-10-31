import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  constructor(private http: HttpClient) { }

  getUserList() {
    console.log('jsonservice');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId: string) {
    console.log('getuser');
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  public getPhotos(pageNumber: number,pageSize: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  gettodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getUsersDetails(data_type:any,user_id:any) {
    let url = "";
    if(data_type == 0)
    {
      url = "https://jsonplaceholder.typicode.com/users/"+user_id+"/posts"
    }
    if(data_type == 1)
    {
      url = "https://jsonplaceholder.typicode.com/users/"+user_id+"/comments"
    }
    if(data_type == 2)
    {
      url = "https://jsonplaceholder.typicode.com/users/"+user_id+"/Albums"
    }
    if(data_type == 3)
    {
      url = "https://jsonplaceholder.typicode.com/users/"+user_id+"/photos"
    }
    if(data_type == 4)
    {
      url = "https://jsonplaceholder.typicode.com/users/"+user_id+"/todos"
    }
    return this.http.get(url);
  }

}
