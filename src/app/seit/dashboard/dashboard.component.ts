import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Observable';

import { SeitService } from '../seit.service';
import { Session } from '../models/session';
import { Result } from '../../user/models/result';
import { Department } from '../../user/models/tccg/department';
import { Institution } from '../../user/models/tccg/institution';
import { User } from '../../user/models/tccg/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sessions: Observable<Session[]>;
  currentInstitution: Observable<Institution>;

  displayedColumns = ['tuid', 'name', 'delivery_time', 'fail_time', 'mail_status', 'test_status', 'action'];
  userDataProvider: MatTableDataSource<User>;

  private _selectedInstitution: Institution;
  private _currentDepartment: Department;

  constructor(private seitService: SeitService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sessions = this.seitService.getSessions();
  }

  public get selectedInstitution(): Institution {
    return this._selectedInstitution;
  }
  public set selectedInstitution(value: Institution) {
    this._selectedInstitution = value;
    this.currentDepartment = null;

    this.currentInstitution = (value) ? this.seitService.getMailsFromInstitution(value.siid) : null;
  }

  public get currentDepartment(): Department {
    return this._currentDepartment;
  }
  public set currentDepartment(value: Department) {
    this._currentDepartment = value;

    this.userDataProvider = new MatTableDataSource(this.getUsers(value));
  }

  private getUsers(department: Department): User[] {
    if (department == null) { return null; }

    let users: User[] = new Array();
    for (const sub_department of department.sub_departments) {
      users = users.concat(this.getUsers(sub_department));
    }

    return department.users.concat(users);
  }
}
