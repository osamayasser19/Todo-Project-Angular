# Todo List Application - Angular

A simple yet powerful Todo List application built with Angular that helps you manage your daily tasks efficiently.

## Features

- **Add New Tasks**: Easily add new todo items to your list
- **Mark as Done**: Complete tasks and move them to the "Completed Tasks" section
- **Delete Tasks**: Remove individual tasks you no longer need
- **Clear All**: Option to clear the entire todo list at once
- **Two Views**:
  - Active Tasks: Shows all pending todos
  - Completed Tasks: Displays all finished tasks
- **Responsive Design**: Works well on both desktop and mobile devices

## Technologies Used

- Angular (v16+)
- TypeScript
- HTML5 & CSS3

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/osamayasser19/Todo-Project-Angular.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-Project-Angular
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open your browser and visit `http://localhost:4200`

## Usage

1. **Adding a Task**:
   - Type your task in the input field
   - Press Enter or click the "Add" button

2. **Completing a Task**:
   - Click the "Done" button next to any task
   - The task will move to the Completed Tasks page

3. **Deleting a Task**:
   - Click the "Delete" button to remove a task permanently

4. **Viewing Completed Tasks**:
   - Navigate to the "Completed Tasks" tab to see all finished items
   - You can mark tasks as "Undone" to return them to the active list

5. **Clearing All Tasks**:
   - Use the "Clear All" button to remove all tasks at once

## Project Structure

- `todo.service.ts`: Handles all todo-related operations and state management
- `todos.component`: Displays and manages active todos
- `completed-tasks.component`: Shows completed tasks
- `app.component`: Main application container with navigation

