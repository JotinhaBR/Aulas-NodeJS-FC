import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(json): Observable<any> {
    return this.http.post('http://localhost:3000/user/create', json);
  }

  buscarUser(json): Observable<any> {
    return this.http.post('http://localhost:3000/user/buscar', json);
  }

  deleteUser(json): Observable<any> {
   return this.http.delete('http://localhost:3000/user/deletar', json);
  }

  // getCat(name: string): Observable<any> {
  //   return this.http.get<Cat>('http://localhost:8000/api/cats/' + name);
  // }

  // insertCat(cat: Cat): Observable<Cat> {
  //   return this.http.post<Cat>('http://localhost:8000/api/cats/', cat);
  // }

  // updateCat(cat: Cat): Observable<void> {
  //   return this.http.put<void>('http://localhost:8000/api/cats/' + cat.name, cat);
  // }

  // deleteCat(name: string) {
  //   return this.http.delete('http://localhost:8000/api/cats/' + name);
  // }
}