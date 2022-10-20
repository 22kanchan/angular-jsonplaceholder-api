import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, config, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './_model/user.model';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
   }

    public get currentUserValue(): User{
      return this.currentUserSubject.value;
    }

    login(username: any, password: any){
      return this.http.post<any>(`${config}/user/authenticate`, { username, password})
      .pipe(map(user =>{
        // store user details and Jwt token in local storage to keep user logged in page refresh
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
    }
 logout(){
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null!);
  }

}
