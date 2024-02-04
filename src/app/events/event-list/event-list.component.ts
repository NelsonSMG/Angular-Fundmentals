import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

declare let toastr: any

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent implements OnInit {

  events: any[] = []

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents()
  }

}
