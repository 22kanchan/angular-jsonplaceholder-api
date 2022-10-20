import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './_model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) { }
  public apiUrl= 'http://localhost:4200';
 
  getAll(){
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  register(user: User){
    // console.log('hello');
    // let userList:any = localStorage.getItem('users');
    // if(userList==undefined || userList==null){
    //   userList=[User];
    // }
    // else{
    //   userList=JSON.parse(userList);
    //   if((userList.filter((x:any)=>x.username==user.username && x.password==user.password)).length==0){
    //   userList.push(user);
    //   localStorage.setItem('users',JSON.stringify(userList));
    //   return {"status":200,"message": "user register successfully"};
    //   }
    //   else{
    //     return {"status":400,"message": "user already exist"};
    //   }
      
    // }
    return this.http.post(`${this.apiUrl}/user/register`,user);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl }/user/${id}`);
  }
}
