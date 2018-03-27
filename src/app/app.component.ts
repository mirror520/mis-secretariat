import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

import { UserService } from './user/user.service';
import { User } from './user/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SecretariatMIS';
  width = document.documentElement.clientWidth;
  screenWidth: Observable<number>;

  constructor(private iconRegister: MatIconRegistry,
              private router: Router,
              private sanitizer: DomSanitizer,
              private userService: UserService) {
    this.screenWidth = Observable.fromEvent(window, 'resize')
                                 .map(() => document.documentElement.clientWidth)
                                 .debounceTime(200);

    iconRegister.addSvgIcon(
      'mark-github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mark-github.svg')
    );
  }

  ngOnInit() {
    this.screenWidth.subscribe((data) => {
      this.width = data;
    });
  }

  logout() {
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }

  public get currentUser(): User {
    return this.userService.currentUser;
  }
}
