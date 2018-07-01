import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.css".toString()]
})
export class TodoFooterComponent implements OnInit {
  private filterByStatus: FormGroup;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterByStatus = this.formBuilder.group({
      status: 'all'
    });
  }
}
