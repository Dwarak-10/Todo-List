import { Component } from '@angular/core';
import { AddTodoComponent } from "../shared/add-todo/add-todo.component";

@Component({
  selector: 'app-root',
  imports: [ AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-List';
}
