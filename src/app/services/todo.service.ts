import { TodoModel } from "../models/todo.model";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todoes: Array<TodoModel>;

  constructor() {
    this.todoes = new Array<TodoModel>(
      this.createTodo("Review pending"),
      this.createTodo("Mail bank documents"),
      this.createTodo("Complete the story tasks")
    );
  }

  private createTodo(title: string): TodoModel {
    return { title: title, completed: false };
  }

  get todoList(): Observable<Array<TodoModel>> {
    return of(this.todoes);
  }
}
