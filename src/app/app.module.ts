import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { RootComponent } from "./components/root/app.component";
import { TodoHeaderComponent } from "./components/todo-header/todo-header.component";
import { TodoFooterComponent } from "./components/todo-footer/todo-footer.component";
import { NgModule, Inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatIconRegistry
} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    RootComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent
  ],
  bootstrap: [RootComponent],
  providers: [MatIconRegistry]
})
export class AppModule {
  constructor(@Inject(MatIconRegistry) public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias("fontawesome", "fa");
  }
}
