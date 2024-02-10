import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styles: [
  ]
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title: any
  visible: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible
  }

}
