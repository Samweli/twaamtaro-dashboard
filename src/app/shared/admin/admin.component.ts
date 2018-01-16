import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import {TranslateService} from "../../translate/translate.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
 constructor(private _translate: TranslateService){}
 admin = this._translate.instant('admin');
  closelogin(){
    document.getElementById('loginmodal').style.display='none';
  }

  ngOnInit() {
    this.closelogin();

  }
  ngOnDestroy() {
  }

}
