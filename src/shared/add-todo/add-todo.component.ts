import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ViewTodoComponent } from "./view-todo/view-todo.component";


@Component({
  selector: 'app-add-todo',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, FormsModule, MatFormFieldModule, ViewTodoComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

}
