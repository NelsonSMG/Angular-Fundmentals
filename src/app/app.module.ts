import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
// import { TOASTR_TOKEN, Toastr } from './common/toastr.service';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventRouteActivatorService,
  EventThumbnailComponent,
  EventsListComponent,
  EventService,
  EventsListResolverService,
  DurationPipe
} from './events/index'

import { AppRoutingModule } from './routes';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthService } from './user/auth.service';
import { SessionListComponent } from './events/event-detail/session-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-detail/create-session.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

declare let toastr: Toastr
import { JQ_TOKEN, TOASTR_TOKEN, Toastr } from './common/index'
let jquery = (window as any)['$']

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    NotFoundComponent,
    SessionListComponent,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    EventsListResolverService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    EventRouteActivatorService,
    AuthService,
    DurationPipe,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  } else {
    return true
  }
}
