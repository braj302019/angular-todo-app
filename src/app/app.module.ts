import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { RootComponent } from "./components/root/app.component";
import { TodoHeaderComponent } from "./components/todo-header/todo-header.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { TodoFooterComponent } from "./components/todo-footer/todo-footer.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    RootComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoAddComponent,
    TodoFooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
