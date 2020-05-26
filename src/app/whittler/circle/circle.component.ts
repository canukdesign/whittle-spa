import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhittlerClient, ComparisonDto } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public matches: ComparisonDto[];
  public numMatches;

  constructor(
    private router: Router,
    private whittleApi: WhittlerClient) { 
  }

  ngOnInit(): void {
    this.whittleApi.getComparisons(3, 100).subscribe(
      matchResult =>
      {
        this.matches = matchResult;
        this.numMatches = this.matches.length;
      },
      error => {
      })
  }

  profile() {
    this.router.navigate(["whittler/profile"]);
  }

  whittle() {
    this.router.navigate(["whittler/whittle"]);
  }  
}
