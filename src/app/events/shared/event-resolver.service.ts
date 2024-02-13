import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor(
    private eventService: EventService,
  ) { }
 
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getHttpEvent(route.params['id'])
  }
}
