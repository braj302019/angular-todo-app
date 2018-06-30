import { Component, OnInit, Inject } from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-list",
  templateUrl: './todo-list.component.html',
  styleUrls: ["./todo-list.component.css".toString()]
})
export class TodoListComponent implements OnInit {
  private todoes: Array<TodoModel>;
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todoList.subscribe(todoes => this.todoes = todoes);
  }

  get todoList(): Array<TodoModel> {
    return this.todoes;
  }
}
