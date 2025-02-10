import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodosService } from '../service/todos.service';
import { TodosFirebaseService } from '../service/todosFirebase.service';
import { Observable } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
    selector: 'app-todo',
    imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, CommonModule],
    template: `
    <h2>Items from Firestore</h2>
    <ul>
      <li *ngFor="let item of tasks | async">
        {{ item.task }}: {{ item.description }}
      </li>
      <li *ngIf="(tasks | async)?.length === 0">
    No tasks found.
      </li>
    </ul>
  `,
})
export class TodoComponent {

    todosService = inject(TodosService)
    todosFirebaseService = inject(TodosFirebaseService)
    task: string = ''
    description: string = ''
    err: string = ""

    tasks: Observable<TodoInterface[]>;

    constructor(private firestore: AngularFirestore) {
        console.log(1)
        // Access the "items" collection and listen for real-time updates
        this.tasks = this.firestore.collection<TodoInterface>('todos').valueChanges();
        this.tasks.subscribe((data) => console.log('Tasks:', data));
    }


}
