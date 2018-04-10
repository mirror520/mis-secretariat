import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';

import { UserService } from '../user/user.service';
import { Session } from './models/session';
import { Institution } from '../user/models/tccg/institution';
import { environment } from '../../environments/environment';

@Injectable()
export class SeitService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getSessions(): Observable<Session[]> {
    return this.http.get(this.baseUrl + `/seit/sessions`, {
                          headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
                  }).map((value: Session[]) => {
                    const sessions: Session[] = new Array();
                    for (const session of value) {
                      sessions.push(Object.assign(new Session(), session));
                    }
                    return sessions;
                  });
  }

  getMailsFromInstitution(siid: number): Observable<Institution> {
    return this.http.get(this.baseUrl + `/seit/sessions/${siid}/mails`, {
                          headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
                  }).map((value: Institution) => Object.assign(new Institution(), value));
  }

  private get token(): string {
    return this.userService.currentUser.token.access_token;
  }
}
