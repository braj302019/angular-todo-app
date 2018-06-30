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
      this.createTodo("Review pending", "Office"),
      this.createTodo("Mail bank documents", "Personal"),
      this.createTodo("Complete the story tasks", "Office")
    );
  }

  private createTodo(title: string, category: string): TodoModel {
    return { title: title, completed: false, category: category };
  }

  get todoList(): Observable<Array<TodoModel>> {
    return of(this.todoes);
  }
}
