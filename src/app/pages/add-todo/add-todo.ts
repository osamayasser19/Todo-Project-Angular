import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  todoService = inject(TodoService);

}
