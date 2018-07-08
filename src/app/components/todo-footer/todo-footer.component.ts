import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: [require("./todo-footer.component.less").toString()]
})
export class TodoFooterComponent implements OnInit {
  private pendingItems:number;
  private totalItems:number;

  constructor(
    @Inject(TodoService) private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoService.onTodoUpdate.subscribe(() => {
      this.updateFooter();
    });
    this.updateFooter();
  }

  private updateFooter(): void {
    this.pendingItems = this.todoService.pendingTodoes;
    this.totalItems = this.todoService.totalTodoes;
  }

}
