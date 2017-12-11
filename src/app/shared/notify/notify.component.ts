import { Component, OnInit } from '@angular/core';
import { AuthService} from "./../../core/auth.service";
import { NgProgress } from 'ngx-progressbar';
import { SmsService } from "./../../core/sms.service";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  title: 'Send Mass Notifications';
  
  theMsg: any = {'msg': '' };

  constructor(
    public authService: AuthService,
    private smsService: SmsService,
    public ngProgress: NgProgress
  ) { }

  
  hide(element) {
    document.getElementById(element).style.display='none';
  }
  checkBoxes(element1,element2){
    document.getElementById(element1).style.display='block';

    if(document.getElementById(element1).style.display=='block') { 
      document.getElementById(element2).style.display='none'; 
    } 

  }

  deliveryRes: any;
  statusMsg: any;

  sendMessages() {
    this.ngProgress.start();
    console.log(this.theMsg);
    this.smsService.sendMassMsg(this.theMsg)
      .subscribe(
        res => {
          this.deliveryRes = res;
          if (this.deliveryRes.success) {
            this.statusMsg = 'Messages have been sent';
          } else {
            this.statusMsg = 'Message sending failed';
          }
      });
      this.ngProgress.done();
}
  ngOnInit() {
      this.hide('alertMsg');
      this.hide('awarenessMsg');
  }

}
