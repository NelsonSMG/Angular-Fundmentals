import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';
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
