import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
                <h2>Welcome {{name}}!</h2>
                <h2>Addition 2+2 is: {{2+2}}</h2>
                <h2>Javascript name.length: {{name.length}}</h2>
                <h2>Javascript name.toUpperCase(): {{name.toUpperCase()}}</h2>
                <h2>Function in Interpolation: {{greetuser()}}</h2>
                <h2>window.location.href: {{siteUrl}}</h2>


                <!-- below code Invalid in interpolation -->
                <!--  javascript global properties not works in Interpolation
                <!-- <h2> {{window.location.href}}</h2 >-->
                <!-- <h2>Assignments : {{a=2+2}}</h2> -->
              </div>`,
  styleUrls: ['./test.component.css']

})
export class TestComponent implements OnInit {

  public name = "Alon Musk";
  public firstName = "Rahul";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetuser() {
    return "Hello " + this.firstName;
  }

}
