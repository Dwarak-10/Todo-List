import { inject, Injectable } from "@angular/core";
import { collectionData, Firestore } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { Observable } from "rxjs";
import { TodoInterface } from "../types/todo.interface";

@Injectable({providedIn:'root'})

export class TodosFirebaseService {
    firestore = inject(Firestore)
    todosCollection = collection(this.firestore, 'todos') //reference to our todo collection

getTodos():Observable<TodoInterface[]>{
return collectionData(this.todosCollection, {
    idField:"id"
}) as Observable<TodoInterface[]>
}


}