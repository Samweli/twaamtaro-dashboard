import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {

  closelogin(){ 
    document.getElementById('loginmodal').style.display='none';
  }

  ngOnInit() { 
    this.closelogin();

  }
  ngOnDestroy() {
  }

}
