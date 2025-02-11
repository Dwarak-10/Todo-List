import { Component, inject } from '@angular/core';
import { TodosService } from '../../../todos/service/todos.service';
import { TodosFirebaseService } from '../../../todos/service/todosFirebase.service';

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    todosService = inject(TodosService);
    todosFirebaseService = inject(TodosFirebaseService);
    task: string = '';

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.task = target.value;
    }

    addTodo(): void {
        this.todosFirebaseService.addTodo(this.task).subscribe((addedTodoId) => {
            this.todosService.addTodo(this.task, addedTodoId);
            this.task = '';
        });
    }
}