import { Component, OnInit, Inject, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-actions",
  templateUrl: "./todo-actions.component.html",
  styles: [require("./todo-actions.component.less").toString()]
})
export class TodoActionsComponent implements OnInit {
  private filterByStatus: FormGroup;
  @Output() toggleSideDrawer = new EventEmitter<void>();

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(TodoService) private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.initFilterByStatus();
    this.onChanges();
  }

  private initFilterByStatus(): void {
    this.filterByStatus = this.formBuilder.group({
      status: "ALL"
    });
  }

  private onChanges(): void {
    this.filterByStatus.get("status").valueChanges.subscribe(val => {
      this.todoService.filterByStatusChanged(val);
    });
  }

  private addNewTodo(): void{
    this.toggleSideDrawer.emit();
  }
}
