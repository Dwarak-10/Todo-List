import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from "../shared/add-todo/add-todo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-List';
}
