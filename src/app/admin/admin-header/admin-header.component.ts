import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {

    loginbox() { 
    document.getElementById('loginmodal').style.display='block';
  }
  
  ngOnInit() {
  }
}
