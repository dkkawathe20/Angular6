import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public title = "Event Binding";
  public greetings = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greetings = event.type;
  }

}
