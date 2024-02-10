import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: [
  ]
})
export class SessionListComponent implements OnInit {

  @Input() sessions: any
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
