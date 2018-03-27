import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';

import { Result } from './models/result';
import { User } from './models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private static _currentUsers: User;
  private static _redirectUrl: string;

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<Result> {
    const params = {
      username: username,
      password: password
    };

    return this.http.patch(this.baseUrl + '/users/login', params)
                    .map((value: Result) => Object.assign(new Result(), value));
  }

  public get currentUser(): User {
    return UserService._currentUsers;
  }
  public set currentUser(value: User) {
    UserService._currentUsers = value;
  }

  public get redirectUrl(): string {
    return UserService._redirectUrl;
  }
  public set redirectUrl(value: string) {
    UserService._redirectUrl = value;
  }
}
