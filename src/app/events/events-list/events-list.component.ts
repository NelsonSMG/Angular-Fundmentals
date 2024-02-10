import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: [
  ]
})
export class EventsListComponent implements OnInit {

  events: IEvent[] | undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}
