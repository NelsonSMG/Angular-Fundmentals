import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [
    `
    em {float:right; color: #E05C65; padding-left:10px}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}

  `
  ]
})
export class CreateEventComponent implements OnInit {


  newEvent: any
  isDirty: boolean = true

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    // this.newEvent = {
    //   name: "Ng Spectacular",
    //   date: '8/8/2023',
    //   time: '10am',
    //   price: 799.99,
    //   location: {
    //     address: '23423',
    //     city: 'Felicity',
    //     country: 'Angular'
    //   },
    //   onlineUrl: 'http://mochiron',
    //   imageUrl: 'http://mochiron/mochiron.png',
    // }
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  saveEvent(formValues: any){
    console.log(formValues)
    // this.eventService.saveEvent(formValues)
    this.eventService.saveHttpEvent(formValues).subscribe(()=>{
      this.isDirty = false
      this.router.navigate(['/events'])
    })
  }

}
