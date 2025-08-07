import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { DatePipe } from '@angular/common';
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-todos',
  imports: [DatePipe, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todoService = inject(TodoService);
}
