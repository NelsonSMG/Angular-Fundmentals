import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [
  ]
})
export class EventListComponent implements OnInit {

  event1 = {
    id: 12,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 100,
    imageUrl: '/assets/image/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
