import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Child Component-Interaction Demo, App Component  As Parent Component';

  firstName = "Misko"; //showing this  on child component

  messageFromChild = "";

}
