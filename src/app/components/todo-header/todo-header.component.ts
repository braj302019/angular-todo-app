import { Component, OnInit } from "@angular/core";

@Component({
  selector: "todo-header",
  templateUrl: './todo-header.component.html',
  styles: [require("./todo-header.component.less").toString()]
})
export class TodoHeaderComponent implements OnInit {
  private today: Date;
  
  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
    
  }
}
