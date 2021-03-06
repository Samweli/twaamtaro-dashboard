import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TranslateService } from "../../translate/translate.service";

import { AuthService } from "./../../core/auth.service";
import { UserService } from "./../../core/user.service";
import {SessionService} from "../../core/session.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService,
    public userService: UserService,
    private sessionService: SessionService,
    private _translate: TranslateService

  ) { }

  public translatedText: string;
  public supportedLanguages: any[];
  supportedLangs: any;

  loginbox() {
    document.getElementById('loginmodal').style.display='block';
  }
  registerbox() {
    document.getElementById('registermodal').style.display='block';
  }
  logout() {
    // remove user from local storage to log user out
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
  loggedIn: any;
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
      return this.loggedIn;
  }

  //Get total number of leader requests for notifications
  requests: any;
  leaderReq(data) {
    this.userService.getLeaderRequests(data)

      .subscribe(res => {
        this.requests = res.length;

      })
  }
  checkNotification(){
    if(this.sessionService.hasRole('weo')){
      this.leaderReq({role_name:'veo'});
    }
    else if(this.sessionService.hasRole('meo')){
      this.leaderReq({role_name:'weo'});
    }
  }
 


  ngOnInit() {
    this.isLoggedIn();
    this.checkNotification();

   // standing data
   this.supportedLangs = [
    {display: 'English', value: 'en'},
    {display: 'Swahili', value: 'sw'},
  ];

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
