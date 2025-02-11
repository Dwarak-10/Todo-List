
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../service/todos.service';
import { TodosFirebaseService } from '../../service/todosFirebase.service';
import { DeleteboxComponent } from '../../component/deletebox/deletebox.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  imports: [CommonModule, MatIconModule],
})
export class TodoComponent implements OnInit, OnChanges {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();

  @ViewChild('textInput') textInput?: ElementRef;

  todosService = inject(TodosService);
  todosFirebaseService = inject(TodosFirebaseService);
  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo.task;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    const dataToUpdate = {
      task: this.editingText,
      isCompleted: this.todo.isCompleted,
    };

    this.todosFirebaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.changeTodo(this.todo.id, this.editingText);
      });

    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }

  toggleTodo(): void {
    const dataToUpdate = {
      task: this.todo.task,
      isCompleted: !this.todo.isCompleted,
    };
    this.todosFirebaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.toggleTodo(this.todo.id);
      });
  }


  dialog = inject(MatDialog);

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteboxComponent, {
      width: '300px', // Adjust dialog width as needed
    });

    // Listen for the dialog close event
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todosFirebaseService.removeTodo(this.todo.id).subscribe(() => {
          this.todosService.removeTodo(this.todo.id);
        });
        console.log('Item will be deleted');

      } else {
        console.log('Deletion cancelled');
      }
    });
  }




}
