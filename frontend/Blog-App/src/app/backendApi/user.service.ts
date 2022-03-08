import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(userID: number): Observable<User>{
    debugger;
    return this.httpClient.get<User>(`${this.baseURL}/${userID}`);
  }

  updateUser(userID: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${userID}`, user);
  }

  deleteUser(userID: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userID}`);
  }
}
