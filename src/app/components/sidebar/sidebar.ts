import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  items = [
    {
      routeLink: '/',
      title: 'Today Tasks',
    },
    {
      routeLink: 'completed-todos',
      title: 'Completed Tasks',
    },
  ];
}
