import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './_model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) { }
 
  getAll(){
    return this.http.get<User[]>(`/user`);
  }

  register(user: User){
    
    return this.http.post(`/user/register`,user);
  }

  delete(id:number){
    return this.http.delete(`/user/${id}`);
  }
}
