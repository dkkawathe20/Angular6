import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {
  title = "ngFor Directive";
  colors = ["red", "blue", "Green", "Orange"]

  constructor() { }

  ngOnInit() {
  }

}
