import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createUser(data: any): Observable<void> {
    return this.http.post(`/api/users`, data).pipe(
      map(response => {
        console.log(response)
      })
    )
  };
}
