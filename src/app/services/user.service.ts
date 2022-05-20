import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    let myHeader =  new HttpHeaders({'myheader':'headerValue'});
    myHeader = myHeader.set('id', '1234');
    myHeader = myHeader.append('id', '000');

    return this.httpClient.get<User[]>(`${this.apiUrl}users`, {headers: myHeader});
  }

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}users/1`).pipe(
      tap(users => console.log(users))
    );
  }

  createUser(user:User): Observable<User>{
    return this.httpClient.post<User>(`${this.apiUrl}users`, user);
  }

  updateUser(user:User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}users/${user.id}`, user);
  }

  patchUser(user:User): Observable<User>{
    return this.httpClient.patch<User>(`${this.apiUrl}users/${user.id}`, user);
  }

  deleteUser(id:number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}users/${id}`);
  }
}
