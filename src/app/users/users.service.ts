import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Albums, User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.baseUrl);
  }
  getAlbums(): Observable<Albums[]> {
    return this._http.get<Albums[]>(this.albumsUrl);
  }

  getUser(id: number): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this._http.post<User>(this.baseUrl, user);
  }

  editUser(id: number, user: User): Observable<User> {
    return this._http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this._http.delete<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  // text(text: any): Subject<any> {
  //   console.log(text.target.value);
  //   return (this.texto = text);
  // }

  private txt$: Subject<any> = new BehaviorSubject('nada');
  // private text$: Subject<any> = new Subject();

  setText(text: any): void {
    this.txt$.next(text);
  }

  get text$(): Observable<any> {
    return this.txt$.asObservable();
  }
}
