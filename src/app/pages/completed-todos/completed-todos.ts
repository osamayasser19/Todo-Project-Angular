import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-completed-todos',
  imports: [DatePipe],
  templateUrl: './completed-todos.html',
  styleUrl: './completed-todos.css',
})
export class CompletedTodos {
  todoService = inject(TodoService);
}
