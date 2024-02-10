import { Component, OnInit } from '@angular/core';
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

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
