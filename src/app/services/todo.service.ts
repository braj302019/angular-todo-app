import { TodoModel } from "../models/todo.model";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import * as _ from 'lodash';

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todoes: Array<TodoModel>;
  private counter: number = 0;
  private topic: Subject<void> = new Subject<void>();
  private observable: Observable<void> = this.topic.asObservable();

  constructor() {
    this._init();
  }

  private _init() {
    this.todoes = new Array<TodoModel>();
    this.createTodo("Review pending", "Office");
    this.createTodo("Mail bank documents", "Personal");
    this.createTodo("Complete the story tasks", "Office");
  }

  get todoObservable(): Observable<void> {
    return this.observable;
  }

  createTodo(title: string, category: string): void {
    this.todoes.push(this.buildTodo(title, category));
    this.topic.next();
  }

  private buildTodo(title: string, category: string): TodoModel {
    return {
      id: this.counter++,
      title: title,
      completed: false,
      category: category
    };
  }

  removeTodo(id: number): void {
    _.remove(this.todoes, (todo) => todo.id === id);
  }

  toggleTodoCompleted(id: number): void {
    let index = _.findIndex(this.todoes, (todo) => todo.id === id);
    this.todoes[index].completed = !this.todoes[index].completed
    this.topic.next();
  }

  get todoList(): Array<TodoModel> {
    return this.todoes;
  }
}
