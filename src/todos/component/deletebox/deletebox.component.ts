
import {
    Component,
    inject,
    Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TodosService } from '../../service/todos.service';
import { TodosFirebaseService } from '../../service/todosFirebase.service';
import { TodoInterface } from '../../types/todo.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-tdeletebox',
    templateUrl: './deletebox.component.html',
    imports: [MatIconModule, MatButtonModule, MatDialogModule],
})
export class DeleteboxComponent {
    @Input({ required: true }) todo!: TodoInterface;

    constructor(private dialogRef: MatDialogRef<DeleteboxComponent>) { }


    todosService = inject(TodosService);
    todosFirebaseService = inject(TodosFirebaseService);

    onConfirm(): void {
        this.dialogRef.close(true);
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }
}
