
    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { Http } from '@angular/http';
    
    @Component({
      selector: 'app-shared',
      templateUrl: './shared.component.html',
      styleUrls: ['./shared.component.css'],
    })
    export class SharedComponent implements OnInit, OnDestroy {
    
      bodyClasses = 'skin-blue sidebar-mini';
      body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    
      ngOnInit() { 
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    
      }
      ngOnDestroy() {
        //remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
      }
    
    }
    

