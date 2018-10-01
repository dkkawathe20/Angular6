import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  title = "Built-in pipes in angular";
  name = "Codevolution";
  message = "welcome to code evalition!"
  date = new Date()

  employee = {
    id: "1",
    name: "Adam"
  }


  constructor() { }

  ngOnInit() {
  }

}
