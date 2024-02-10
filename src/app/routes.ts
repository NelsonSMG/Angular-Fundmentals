import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EventsListComponent } from './events/events-list/events-list.component';
// import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RouterModule, Routes } from '@angular/router';
// import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
// import { EventRouteActivatorService } from './events/event-detail/event-route-activator.service';
// import { EventsListResolverService } from './events/shared/events-list-resolver.service';

import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailComponent,
  EventRouteActivatorService,
  EventsListComponent,
  EventsListResolverService
} from './events/index'


const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: 'events', component: EventsListComponent, resolve: { events:EventsListResolverService } },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
