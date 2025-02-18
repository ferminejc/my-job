import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-view',
  standalone: false,
  templateUrl: './kanban-view.component.html',
  styleUrl: './kanban-view.component.scss',
})
export class KanbanViewComponent {
  columns = [
    {
      title: 'Assigned',
      cards: [
        {
          address: '25 Poitier St McDowall QLD 405',
          type: 'Residential Mortgage',
          amount: 250,
          time: '16h 25m',
        },
        {
          address: '26 Poitier St McDowall QLD 405',
          type: 'Residential Mortgage',
          amount: 250,
          time: '16h 25m',
        },
        {
          address: '27 Poitier St McDowall QLD 405',
          type: 'Residential Mortgage',
          amount: 250,
          time: '16h 25m',
        },
      ],
      color: '#ff9800',
    },
    {
      title: 'Scheduled',
      cards: [
        {
          address: '45 Habitat Blvd Warner QLD 4500',
          type: 'Residential Mortgage',
          amount: 320,
          time: '2d 12h',
        },
        {
          address: '46 Habitat Blvd Warner QLD 4500',
          type: 'Residential Mortgage',
          amount: 320,
          time: '2d 12h',
        },
        {
          address: '47 Habitat Blvd Warner QLD 4500',
          type: 'Residential Mortgage',
          amount: 320,
          time: '2d 12h',
        },
      ],
      color: '#4caf50',
    },
    {
      title: 'Inspected',
      cards: [
        {
          address: '58 Jabiru Ave Burleigh QLD 4220',
          type: 'Residential Mortgage',
          amount: 250,
          time: '7h 30m',
        },
        {
          address: '59 Jabiru Ave Burleigh QLD 4220',
          type: 'Residential Mortgage',
          amount: 250,
          time: '7h 30m',
        },
        {
          address: '60 Jabiru Ave Burleigh QLD 4220',
          type: 'Residential Mortgage',
          amount: 250,
          time: '7h 30m',
        },
      ],
      color: '#3f51b5',
    },
    { title: 'Report Preparation', color: '#9c27b0', cards: [] },
    { title: 'Reviewing', color: '#ff5722', cards: [] },
  ];

  connectedDropLists: string[];

  constructor() {
    this.connectedDropLists = this.columns.map((_, index) => `column-${index}`);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
