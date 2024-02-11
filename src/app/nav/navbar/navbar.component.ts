import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events';
import { ISession } from 'src/app/events/shared/event.model';
import { AuthService } from 'src/app/user/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {font-size: 15px}
      li > a.active { color:#F97924 }
      #searchForm {margin-right: 100px}
      @media (max-width: 1200px) {#searchForm {display:none}}
    `
  ]
})
export class NavbarComponent implements OnInit {

  searchTerm: string = ""
  foundSessions: ISession[] = []

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  searchSession(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions
      console.log(this.foundSessions)
    });
    
  }

}
