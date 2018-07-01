import { Component, OnInit } from "@angular/core";

@Component({
  selector: "todo-header",
  templateUrl: './todo-header.component.html',
  styleUrls: ["./todo-header.component.css".toString()]
})
export class TodoHeaderComponent implements OnInit {
  private today: Date;
  
  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
    
  }
}
