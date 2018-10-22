import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
  styleUrls : ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  name = 'v3nk3y';
  age = 26;

  getServerStatus () {
    return this.serverStatus;
  }
}
