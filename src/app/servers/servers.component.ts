import { Component } from '@angular/core';

@Component({
  selector : 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls : ['./servers.component.css']
})
export class ServersComponent {

}


// ways to use choose selector value

//  selector : 'app-servers',     - by element    ->  <app-servers></app-servers>
//  selector : ['app-servers']    - by attribute  ->  <div app-servers></div>
//  selector : '.app-servers'     - by class      ->  <div class="app-servers"></div>


// styleUrls -> should be an array
