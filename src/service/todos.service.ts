import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "../types/todo.interface";
import { FilterEnum } from "../types/filter.enum";

@Injectable({providedIn:"root"})


export class TodosService {
 
todosSignal = signal<TodoInterface []>([]);
filterSignal = signal<FilterEnum>(FilterEnum.all)

changeFilter(filterName:FilterEnum):void{
    this.filterSignal.set(filterName)
}

addTodo(task:string, description:string, id:string):void{
const newTodo : TodoInterface ={
    task,
    description,
    id,
    isCompleted:false
};
this.todosSignal.update((todos) => [...todos, newTodo])
}

removeTodo(id:string):void {
this.todosSignal.update((todos)=> todos.filter((todo) =>todo.id !== id))
}

changeTodo(task:string, description:string, id:string):void{
    this.todosSignal.update((todos)=>todos.map(todo => todo.id === id ?{...todo,task,description} : todo))
}

toggleTodo(id:string):void{
this.todosSignal.update((todos) => todos.map((todo)=>todo.id === id ? {...todo, isCompleted:!todo.isCompleted} : todo))
}

toggleAll(isCompleted:boolean):void{
this.todosSignal.update((todos)=>todos.map((todo) => ({...todo, isCompleted})))
}


}