import { Routes } from '@angular/router';
import { CompletedTodos } from './pages/completed-todos/completed-todos';
import { Todos } from './pages/todos/todos';
import { AddTodo } from './pages/add-todo/add-todo';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Todos },
  { path: 'completed-todos', component: CompletedTodos },

];
