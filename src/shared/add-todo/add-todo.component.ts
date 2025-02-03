
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-add-todo',
  imports:[MatFormFieldModule,MatInputModule,MatIconModule,FormsModule,CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  task: string = '';
  description: string = '';
  tasks: { task: string, description: string }[] = [];
  editIndex: number | null = null; 



  addTask() {
    if (this.task.trim() && this.description.trim()) {
      if (this.editIndex === null) {
        this.tasks.push({ task: this.task, description: this.description });
      } else {
        this.tasks[this.editIndex] = { task: this.task, description: this.description };
        this.editIndex = null; 
      }
      console.log(this.tasks);
      this.task = '';
      this.description = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editIndex === index) {
      this.task = '';
      this.description = '';
      this.editIndex = null;
    }
  }

  editTask(index: number) {
    this.task = this.tasks[index].task;
    this.description = this.tasks[index].description;
    this.editIndex = index;
  }
}

