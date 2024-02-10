import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: [
  ]
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: any
  @Input() filterBy: string = 'all'
  @Input() sortBy: string = 'votes'
  visibleSessions: ISession[] = []
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions){
      this.filterSessions(this.filterBy)
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesAsc)
    }
  }

  filterSessions(filter: string) {

    if (filter === 'all'){
      this.visibleSessions = this.sessions.slice(0)
    } else {
      this.visibleSessions = this.sessions.filter( (s:any) => {
        return s.level.toLocaleLowerCase() === filter
      })
      // .filter((w: any) => w != null)
    }
  }

  sortByNameAsc(s1: ISession, s2:ISession) {
    if (s1.name > s2.name) {
      return 1
    } else if (s1.name === s2.name) {
      return 0
    } else {
      return -1
    }
  }

  sortByVotesAsc(s1: ISession, s2:ISession) {
    return s2.voters.length - s1.voters.length
  }

}
