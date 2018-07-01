import { TodoModel } from "../models/todo.model";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import * as _ from "lodash";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todoes: Array<TodoModel>;
  private counter: number = 0;
  private filterByStatus: string = "ALL";
  private todoTopic: Subject<void> = new Subject<void>();
  private todoTopicObservable: Observable<void> = this.todoTopic.asObservable();
  private filterByStatusTopic: Subject<void> = new Subject<void>();
  private filterByStatusTopicObservable: Observable<
    void
  > = this.filterByStatusTopic.asObservable();

  constructor() {
    this._init();
  }

  private _init(): void {
    this.todoes = new Array<TodoModel>();
    this.createTodo("Review pending", "Office");
    this.createTodo("Mail bank documents", "Personal");
    this.createTodo("Complete the story tasks", "Office");
  }

  get onTodoUpdate(): Observable<void> {
    return this.todoTopicObservable;
  }

  get onFilterByStatusChange(): Observable<void> {
    return this.filterByStatusTopicObservable;
  }

  createTodo(title: string, category: string): void {
    this.todoes.push(this.buildTodo(title, category));
    this.todoTopic.next();
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
    _.remove(this.todoes, todo => todo.id === id);
  }

  toggleTodoCompleted(id: number): void {
    let index = _.findIndex(this.todoes, todo => todo.id === id);
    this.todoes[index].completed = !this.todoes[index].completed;
    this.todoTopic.next();
  }

  filterByStatusChanged(filterByStatus: string): void {
    this.filterByStatus = filterByStatus;
    this.filterByStatusTopic.next();
  }

  get todoList(): Array<TodoModel> {
    switch (this.filterByStatus) {
      case "COMPLETED":
        return this.todoes.filter(todo => todo.completed === true);
      case "PENDING":
        return this.todoes.filter(todo => todo.completed === false);
      default:
        return this.todoes;
    }
  }

  get filterBy(): string {
    return this.filterByStatus;
  }

  get totalTodoes(): number {
    return this.todoes.length;
  }

  get pendingTodoes(): number {
    return this.todoes.filter(todo => todo.completed === false).length;
  }
}
