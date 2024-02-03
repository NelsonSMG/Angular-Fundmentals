import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .pad-left { margin-left: 10px }
      .well div { color: #bbb }
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

}
