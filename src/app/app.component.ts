import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DrainsService } from './drains/drains.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  drains;
}

