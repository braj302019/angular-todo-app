import {
  Component,
  OnInit,
  Inject,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styles: [require("./todo-list.component.less").toString()]
})
export class TodoListComponent implements OnInit {
  private todoes: Array<TodoModel>;
  @ViewChild("removeDialog") removeDialog: DialogComponent;
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

  private removeTodo(id: number, content: string): void {
    this.removeDialog.open().then(
      response => {
        if (response) {
          this.todoService.removeTodo(id);
        }
      },
      dismiss => {}
    );
  }

  private updateTodo(todo: TodoModel): void {
    this.editTodo.emit(todo);
  }
}
