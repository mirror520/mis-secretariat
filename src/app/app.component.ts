import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

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
              private sanitizer: DomSanitizer) {
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
}
