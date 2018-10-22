import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls : ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created !';
  serverName = 'Test Server';
  serverName2 = 'ngModel Server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  getAllowNewServer() {
    return this.allowNewServer;
  }

  onCreateServer() {
    return this.serverCreationStatus = 'Server is created !';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}


// ways to use choose selector value

//  selector : 'app-servers',     - by element    ->  <app-servers></app-servers>
//  selector : ['app-servers']    - by attribute  ->  <div app-servers></div>
//  selector : '.app-servers'     - by class      ->  <div class="app-servers"></div>


// styleUrls -> should be an array
