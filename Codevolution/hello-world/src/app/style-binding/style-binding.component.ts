import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public title = "Style Binding";
  public hasError = false;
  public highlightColor = "orange";
  public titleStyles = {
    color: "Blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
