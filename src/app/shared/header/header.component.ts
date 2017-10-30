import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "./../../core/auth.service";
import {TranslateService} from "../../transilate/translate.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,public authService: AuthService, private _translate: TranslateService) { }

  loginbox() {
    document.getElementById('loginmodal').style.display='block';
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.log(localStorage.currentUser);
    this.router.navigateByUrl('/');
  }
  loggedIn: any;
  isLoggedIn()
  {
    this.loggedIn = this.authService.isLoggedIn();
    console.log(this.loggedIn)
  }
  public translatedText: string;
  public supportedLanguages: any[];
  supportedLangs: any;

  ngOnInit() {
    // standing data
    this.supportedLangs = [
      {display: 'English', value: 'en'},
      {display: 'Swahili', value: 'sw'},
    ];
    this.isLoggedIn();
    this.selectLang('sw');


    this.subscribeToLangChanged();

    // set language
    this._translate.setDefaultLang('en');
    this._translate.enableFallback(true);
    this.selectLang('sw');

  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    // this.refreshText(); // remove
  }

  refreshText() {
    this.translatedText = this._translate.instant('all');
  }

  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }


}
