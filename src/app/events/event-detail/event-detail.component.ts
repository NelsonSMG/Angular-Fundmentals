import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../index';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styles: [`
    .container {
      padding-left:20px; padding-right: 20px;
    }
    .event-image {
      height: 100px
    }
    a {cursor:pointer}
  `]
})
export class EventDetailComponent implements OnInit {

  event: IEvent | undefined
  addMode: boolean = false

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession){
    let nextId: number = 0

    if (this.event) {
      nextId = Math.max.apply(null, this.event.sessions.map( (s: ISession) => s.id ))
      session.id = nextId + 1
      this.event.sessions.push(session)
      this.eventService.updateEvent(this.event)
      this.addMode = false
    }
    
  }

  cancelAddSession(){
    this.addMode = false
  }

}
