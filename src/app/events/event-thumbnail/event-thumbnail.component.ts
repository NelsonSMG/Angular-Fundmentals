import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .green {color: #003300 !important}
      .bold {font-weight: bold}
      .pad-left { margin-left: 10px }
      .well div { color: #bbb }
      .thumbnail {min-height: 210px}
    `
  ]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any
  // @Output() eventClick = new EventEmitter()

  someProperty: any = "some value"

  constructor() { }

  ngOnInit(): void {
  }

  // handleClickMe() {
  //   this.eventClick.emit('foo')
  // }

  // logFoo() {
  //   console.log('foo')
  // }

  getStartTimeClass(){
    const isEarlyStart = this.event?.time === '8:00 am' && this.event?.time === '8:00 am'

    if (this.event?.time === '8:00 am' && this.event?.time === '8:00 am') {
      return "green bold"
    }
    return ""
    // return {green: isEarlyStart, bold: isEarlyStart}
  }

  //if using ngStyle
  getStartTimeStyle(){
    if (this.event?.time === '8:00 am' && this.event?.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold' }
    }
    return {}
  }

}
