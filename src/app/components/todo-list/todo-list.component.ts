import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css".toString()]
})
export class TodoListComponent implements OnInit {
  private todoes: Array<TodoModel>;
  @Output() editTodo = new EventEmitter<TodoModel>();

  constructor(@Inject(TodoService) private todoService: TodoService) {}

  ngOnInit(): void {
    this.initSubscribers();
    this.loadTodoes();
  }

  private initSubscribers(): void {
    this.todoService.onTodoUpdate.subscribe(() => {
      this.loadTodoes();
    });
    this.todoService.onFilterByStatusChange.subscribe(() => {
      this.loadTodoes();
    });
  }

  private loadTodoes(): void {
    this.todoes = this.todoService.todoList;
  }

  private toggleTodoCompleted(id: number): void {
    this.todoService.toggleTodoCompleted(id);
  }

  private removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }

  private updateTodo(todo: TodoModel): void {
    this.editTodo.emit(todo);
  }

}
