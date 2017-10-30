import { Component, OnInit } from '@angular/core';
import { User } from "./../../core/user";
import { UserService } from "./../../core/user.service";
import { DrainsService } from './../../core/drains.service';
import { Drain } from './../drains/drain';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  users: User[];
  alldrains: Drain[];
  cleandrains: Drain[];
  helpdrains: Drain[];
  dirtydrains:Drain[];
  unknowndrains:Drain[];

constructor(private drainService: DrainsService, private userService: UserService) { }
 getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(users => this.users = users);
  }
  getDrains(): any {
    this.drainService
        .getDrains()
        .subscribe(drains => this.alldrains = drains);
  }

  cleanDrains(): any {
    this.drainService
        .getCleanDrains()
        .subscribe(cleanDrains => this.cleandrains = cleanDrains);
  }
  dirtyDrains(): any {
    this.drainService
        .getDirtyDrains()
        .subscribe(dirtyDrains => this.dirtydrains = dirtyDrains);
  }
  helpDrains(): any {
    this.drainService
        .getHelpDrains()
        .subscribe(helpDrains => this.helpdrains = helpDrains);
  }
  unknownDrains(): any {
    this.drainService
        .getUnknownDrains()
        .subscribe(unknownDrains => this.unknowndrains = unknownDrains);
  }
  ngOnInit() {
    this.getUsers();
    this.getDrains();
    this.cleanDrains();
    this.dirtyDrains();
    this.helpDrains();
    this.unknownDrains();
  }

}
//
//
// import { Component, OnInit } from '@angular/core';
// import { User } from "./../users/user";
// import { UserService } from "./../users/user.service";
// import { DrainsService } from './../drains/drains.service';
// import { Drain } from './../drains/drain';
// import {TranslateService} from "../../transilate/translate.service";
//
// @Component({
//   selector: 'app-notification-bar',
//   templateUrl: './notification-bar.component.html',
//   styleUrls: ['./notification-bar.component.css']
// })
// export class NotificationBarComponent implements OnInit {
//   users: User[];
//   alldrains: Drain[];
//   cleandrains: Drain[];
//   helpdrains: Drain[];
//   dirtydrains:Drain[];
//   unknowndrains:Drain[];
//
//   constructor(private drainService: DrainsService, private userService: UserService, private _translate: TranslateService) { }
//   getUsers(): void {
//     this.userService
//       .getUsers()
//       .subscribe(users => this.users = users);
//   }
//   getDrains(): any {
//     this.drainService
//       .getDrains()
//       .subscribe(drains => this.alldrains = drains);
//   }
//
//   cleanDrains(): any {
//     this.drainService
//       .getCleanDrains()
//       .subscribe(cleanDrains => this.cleandrains = cleanDrains);
//   }
//   dirtyDrains(): any {
//     this.drainService
//       .getDirtyDrains()
//       .subscribe(dirtyDrains => this.dirtydrains = dirtyDrains);
//   }
//   helpDrains(): any {
//     this.drainService
//       .getHelpDrains()
//       .subscribe(helpDrains => this.helpdrains = helpDrains);
//   }
//   unknownDrains(): any {
//     this.drainService
//       .getUnknownDrains()
//       .subscribe(unknownDrains => this.unknowndrains = unknownDrains);
//   }
//   public translatedText: string;
//   public supportedLanguages: any[];
//   supportedLangs: any;
//
//   ngOnInit() {
//     // standing data
//     this.supportedLangs = [
//       {display: 'English', value: 'en'},
//       {display: 'Swahili', value: 'sw'},
//     ];
//     this.getUsers();
//     this.getDrains();
//     this.cleanDrains();
//     this.dirtyDrains();
//     this.helpDrains();
//     this.unknownDrains();
//     this.selectLang('sw');
//
//
//     this.subscribeToLangChanged();
//
//     // set language
//     this._translate.setDefaultLang('en');
//     this._translate.enableFallback(true);
//     this.selectLang('sw');
//
//   }
//
//   isCurrentLang(lang: string) {
//     return lang === this._translate.currentLang;
//   }
//
//   selectLang(lang: string) {
//     // set default;
//     this._translate.use(lang);
//     // this.refreshText(); // remove
//   }
//
//   refreshText() {
//     this.translatedText = this._translate.instant('all');
//   }
//
//   subscribeToLangChanged() {
//     return this._translate.onLangChanged.subscribe(x => this.refreshText());
//   }
//
//
// }
