import {environment} from '../environments/environment';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<void> {
    return this.http.post(`/api/login_check`, {username, password})
      .pipe(
        map(response => {
          // login successful if there's a jwt token in the response
          if (response) {
            localStorage.setItem('jwt', JSON.stringify(response));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  isLoggedIn() {
    return localStorage.getItem('jwt') !== null;
  }
}
