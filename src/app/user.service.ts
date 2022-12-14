import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './_model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) { }
 
  getAll(){
    console.log('userservice');
    return this.http.get<User[]>(`/users`);
  }

  register(user: User){
    
    return this.http.post(`/users/register`,user);
  }

  delete(id:number){
    return this.http.delete(`/users/${id}`);
  }
}
