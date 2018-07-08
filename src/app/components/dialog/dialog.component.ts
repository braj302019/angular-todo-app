import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Inject,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "dialog",
  templateUrl: "dialog.component.html"
})
export class DialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @ViewChild("content") content: TemplateRef<any>
  constructor(@Inject(NgbModal) private modalService: NgbModal) {}

  ngOnInit() {}

  open(): Promise<any> {
    return this.modalService.open(this.content).result;
  }

}
