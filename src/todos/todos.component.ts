import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { TodosService } from './service/todos.service';
import { TodosFirebaseService } from './service/todosFirebase.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, MainComponent],
})
export class TodosComponent implements OnInit {
    todosService = inject(TodosService);
    todosFirebaseService = inject(TodosFirebaseService);

    ngOnInit(): void {
        this.todosFirebaseService.getTodos().subscribe((todos) => {
            this.todosService.todosSig.set(todos);
        });
    }
}