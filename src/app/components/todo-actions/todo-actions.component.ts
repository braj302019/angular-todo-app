import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-actions",
  templateUrl: "./todo-actions.component.html",
  styleUrls: ["./todo-actions.component.css".toString()]
})
export class TodoActionsComponent implements OnInit {
  private filterByStatus: FormGroup;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(TodoService) private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.intFilterByStatus();
    this.onChanges();
  }

  private intFilterByStatus(): void {
    this.filterByStatus = this.formBuilder.group({
      status: "ALL"
    });
  }

  private onChanges(): void {
    this.filterByStatus.get("status").valueChanges.subscribe(val => {
      this.todoService.filterByStatusChanged(val);
    });
  }
}
