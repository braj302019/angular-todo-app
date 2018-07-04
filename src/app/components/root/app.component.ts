import { Component, OnInit, ViewChild } from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { MatDrawer } from "@angular/material";
import { TodoCreateComponent } from "../todo-create/todo-create.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css".toString()]
})
export class RootComponent implements OnInit {
  @ViewChild("drawer") drawer: MatDrawer;
  @ViewChild("todoCreate") todoCreate: TodoCreateComponent;

  ngOnInit(): void {}

  editTodo(todo: TodoModel): void {
    this.todoCreate.editToto(todo);
    this.drawer.open();
  }
}
