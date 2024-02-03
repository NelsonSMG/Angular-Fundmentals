import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
  ]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any

  constructor() { }

  ngOnInit(): void {
  }

}
