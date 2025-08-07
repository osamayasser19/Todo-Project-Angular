import { Injectable, signal } from '@angular/core';
import { TodoStructure } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosList = signal<TodoStructure[]>([]);
  completedTodos = signal<TodoStructure[]>([]);
  todoId = signal(0);
  addTask(taskTitle: string) {
    if (taskTitle.trim()) {
      const newTask: TodoStructure = {
        id: this.generateNewId(),
        title: taskTitle,
        creationDate: new Date(),
      };
      this.todosList.set([...this.todosList(), newTask]);
    }
  }
  generateNewId() {
    this.todoId.set(this.todoId() + 1);
    return this.todoId();
  }
  delteTask(id: number) {
    this.todosList.set(this.todosList().filter((task) => task.id != id));
  }
  addToCompleted(task: TodoStructure) {
    this.completedTodos.set([...this.completedTodos(), task]);
    this.delteTask(task.id);
  }
  undoneTask(task: TodoStructure) {
    this.todosList.set(this.todosList().filter((t) => t.id != task.id));
    this.reAddTodos(task);
    this.deleteFromCompleted(task);
  }
  reAddTodos(task: TodoStructure) {
    this.todosList.set([...this.todosList(), task]);
  }

  deleteFromCompleted(task: TodoStructure) {
    this.completedTodos.set(
      this.completedTodos().filter((t) => t.id != task.id)
    );
  }

  clearList(list: string) {
    if (list == 'todos') {
      this.todosList.set([]);
    } else if ((list = 'completed')) {
      this.completedTodos.set([]);
    }
  }
}
