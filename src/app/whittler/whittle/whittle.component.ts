import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whittle',
  templateUrl: './whittle.component.html',
  styleUrls: ['./whittle.component.css']
})
export class WhittleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profile() {
    this.router.navigate(["whittler/profile"]);
  }
}
