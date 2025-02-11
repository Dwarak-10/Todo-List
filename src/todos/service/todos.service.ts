import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    todosSig = signal<TodoInterface[]>([]);
    filterSig = signal<FilterEnum>(FilterEnum.all);

    changeFilter(filterName: FilterEnum): void {
        this.filterSig.set(filterName);
    }

    addTodo(task: string, id: string): void {
        const newTodo: TodoInterface = {
            task,
            //   description,
            isCompleted: false,
            id,
        };
        this.todosSig.update((todos) => [...todos, newTodo]);
    }

    changeTodo(id: string, task: string): void {
        this.todosSig.update((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, task } : todo))
        );
    }

    removeTodo(id: string): void {
        this.todosSig.update((todos) => todos.filter((todo) => todo.id !== id));
    }

    toggleTodo(id: string): void {
        this.todosSig.update((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    }

    toggleAll(isCompleted: boolean): void {
        this.todosSig.update((todos) =>
            todos.map((todo) => ({ ...todo, isCompleted }))
        );
    }
}