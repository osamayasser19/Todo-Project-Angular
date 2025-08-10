import { Injectable, signal } from '@angular/core';
import { TodoStructure } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosList = signal<TodoStructure[]>([]);
  completedTodos = signal<TodoStructure[]>([]);
  todoId = signal(0);
  constructor() {
    this.todosList.set(this.getTodos());
    this.completedTodos.set(this.getCompletedTodos());
  }

  //Todos List Page Functions
  addTask(taskTitle: string) {
    if (taskTitle.trim()) {
      const newTask: TodoStructure = {
        id: this.generateNewId(),
        title: taskTitle,
        creationDate: new Date(),
      };
      this.todosList.set([...this.todosList(), newTask]);
    }

    this.saveTodoList();
  }

  delteTask(id: number) {
    this.todosList.set(this.todosList().filter((task) => task.id != id));
    this.saveTodoList();
  }

  addToCompleted(task: TodoStructure) {
    this.completedTodos.set([...this.completedTodos(), task]);
    this.delteTask(task.id);
    this.saveCompleteList();
  }

  deleteFromCompleted(task: TodoStructure) {
    this.completedTodos.set(
      this.completedTodos().filter((t) => t.id != task.id)
    );
    this.saveCompleteList();
  }

  undoneTask(task: TodoStructure) {
    this.reAddTodos(task);
    this.deleteFromCompleted(task);
  }

  reAddTodos(task: TodoStructure) {
    this.todosList.set([...this.todosList(), task]);
    this.saveTodoList();
  }

  generateNewId() {
    this.todoId.set(this.todoId() + 1);
    return this.todoId();
  }
  saveTodoList() {
    const jsonString = JSON.stringify(this.todosList());
    localStorage.setItem('todo-list', jsonString);
  }
  saveCompleteList() {
    const jsonString = JSON.stringify(this.completedTodos());
    localStorage.setItem('complete-todos', jsonString);
  }

  getTodos() {
    return JSON.parse(localStorage.getItem('todo-list') || '[]');
  }

  getCompletedTodos() {
    return JSON.parse(localStorage.getItem('complete-todos') || '[]');
  }

  clearList(list: string) {
    if (list == 'todos') {
      this.todosList.set([]);
      localStorage.removeItem('todo-list');
    } else if ((list = 'completed')) {
      this.completedTodos.set([]);
      localStorage.removeItem('complete-todos');
    }
  }
}
