import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
  public title = "Template Reference Variable"
  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
