import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../index';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .pad-left {
      margin-left: 10px;
    }  
    .well div { color: #bbb; }
    .thumbnail {
      min-height: 210px;
    }
    .green {color: #003300 !important;}
    .bold {font-weight: bold;}
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent | undefined
  @Output() eventClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass() {
    //usar ngClass
    if (this.event && this.event.time === '8:00 am') {
      // return ' green bold'
      return ['green', 'bold']
    }
    return ''
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {green: isEarlyStart, bold: isEarlyStart}
  }

  getStartTimeStyle(): any {
    //usar ngStyle
    if (this.event && this.event.time === '8:00 am') {
      // return ' green bold'
      return {color: '#003300', 'font-weight': 'bold'}
    }
    return {}
  }

}
