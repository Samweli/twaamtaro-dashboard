import { Component, OnInit} from '@angular/core';
import { AuthService } from "./../../core/auth.service";
import { SessionService } from "./../../core/session.service";
import { TranslateService } from "../../translate/translate.service";

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public sessionService: SessionService,
    private _translate: TranslateService
  ) { }
  notifyCitizens() {
  }
  loggedUser;
  public translatedText: string;
  public supportedLanguages: any[];
  supportedLangs: any;

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
    var theUser = JSON.parse(this.sessionService.getLoggedUser());
    this.loggedUser = theUser.first_name + " " + theUser.last_name ; 
    }
    
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


