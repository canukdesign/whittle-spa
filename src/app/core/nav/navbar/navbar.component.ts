import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  fork() {
    this.router.navigate(["master/fork"]);
  }

  tree() {
    this.router.navigate(["master/treefork"]);
  }

  circle() {
    this.router.navigate(["whittler/circle"]);
  }

  profile() {
    this.router.navigate(["whittler/profile"]);
  }

  whittle() {
    this.router.navigate(["whittler/whittle"]);
  }  
}
