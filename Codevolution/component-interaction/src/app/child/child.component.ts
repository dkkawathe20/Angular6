import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = "Child Component";
  //@Input() public parentData;
  // OR
  @Input("parentData") public Name;

  messageInChild = "Hi Codevolution from child !"
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit(this.messageInChild);
  }

}
