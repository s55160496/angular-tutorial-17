import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Loadusers(){
    return this.http.get<users[]>("http://localhost:3000/users");
  }
}
