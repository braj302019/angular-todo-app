import {
  Component,
  OnInit,
  Inject,
  EventEmitter,
  Output,
  Input
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TodoService } from "../../services/todo.service";
import { TodoModel } from "../../models/todo.model";

@Component({
  selector: "todo-create",
  templateUrl: "./todo-create.component.html",
  styleUrls: ["./todo-create.component.css".toString()]
})
export class TodoCreateComponent implements OnInit {
  private formGroup: FormGroup;
  @Output() cancelForm = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<TodoModel>();
  @Input() todo: TodoModel = { title: "", category: "", completed: false };

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(TodoService) private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      id: [this.todo.id],
      title: [this.todo.title, Validators.required],
      category: [this.todo.category, Validators.required],
      completed: [this.todo.completed]
    });
  }

  private onSubmit(): void {
    let form = this.formGroup.value;
    let todo: TodoModel = {
      id: form.id,
      title: form.title,
      category: form.category,
      completed: form.completed
    };
    this.todoService.upsertTodo(todo);
    this.submitForm.emit(todo);
    this.clear();
  }

  private cancel(): void {
    this.cancelForm.emit();
    this.clear();
  }

  private clear(): void {
    this.formGroup.get("title").setValue("");
    this.formGroup.get("category").setValue("");
  }
}
