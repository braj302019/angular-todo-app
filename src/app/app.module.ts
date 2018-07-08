import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { RootComponent } from "./components/root/app.component";
import { TodoHeaderComponent } from "./components/todo-header/todo-header.component";
import { NgModule, Inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbButtonsModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import {
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatIconRegistry,
  MatSidenavModule
} from "@angular/material";
import { CommonModule } from "@angular/common";
import { TodoActionsComponent } from "./components/todo-actions/todo-actions.component";
import { TodoFooterComponent } from "./components/todo-footer/todo-footer.component";
import { TodoCreateComponent } from "./components/todo-create/todo-create.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    NgbModalModule,
    ReactiveFormsModule,
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  declarations: [
    RootComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoActionsComponent,
    TodoFooterComponent,
    TodoCreateComponent,
    DialogComponent
  ],
  bootstrap: [RootComponent],
  providers: [MatIconRegistry]
})
export class AppModule {
  constructor(
    @Inject(MatIconRegistry) public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.registerFontClassAlias("fontawesome", "fa");
  }
}
