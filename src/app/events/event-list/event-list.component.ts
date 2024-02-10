import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';

declare let toastr: any

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent implements OnInit {

  events: IEvent[] | undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {

   }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe( events => {
    //   this.events = events
    // } )
    this.events = this.route.snapshot.data['events'];
  }

  // handleEventClicked(data: any) {
  //   console.log(data)
  // }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }

}
