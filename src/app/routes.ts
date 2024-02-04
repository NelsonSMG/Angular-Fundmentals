import { Router, Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details/event-details.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { EventRouteActivatorService } from "./events/shared/event-route-activator.service";

export const appRoutes: Routes = [
    {path: 'events', component: EventListComponent },
    {path: 'events/new', component: CreateEventComponent },
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    {path: '404', component: NotFoundComponent },
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]