import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../user.service';
import { Result } from '../models/result';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  userLoginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    this.userLoginFormGroup = this.formBuilder.group({
      username: [
        null,
        Validators.required
      ],
      password: [
        null,
        Validators.required
      ]
    });
  }

  loginUser(username: string, password: string) {
    this.currentUser = null;

    this.userService.loginUser(username, password)
                    .subscribe({
                      next: (value) => this.loginResultHandler(value),
                      error: (error) => this.faultHandler(error)
                    });
  }

  private loginResultHandler(result: Result) {
    const user: User = Object.assign(new User(), result.data);
    const info = result.info[0];
    this.currentUser = user;

    this.snackBar.open(info, '確定', {
      duration: 2000
    });

    if (this.userService.redirectUrl != null) {
      this.router.navigate([this.userService.redirectUrl]);
      this.userService.redirectUrl = null;
    }
  }

  private faultHandler(error: HttpErrorResponse) {
    let failureResult: Result;
    let info;

    if (error.status === 401) {
      info = error.error;
    }

    if (error.status === 422) {
      failureResult = Object.assign(new Result(), error.error);
      info = failureResult.info[0];
    }

    this.snackBar.open(info, '確定', {
      duration: 2000
    });
  }

  public get currentUser(): User {
    return this.userService.currentUser;
  }
  public set currentUser(value: User) {
    this.userService.currentUser = value;
  }
}
