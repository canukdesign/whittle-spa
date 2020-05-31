import { Component, OnInit } from '@angular/core';
import { WhittlerClient, ForkDto, ComparisonDto } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-whittle',
  templateUrl: './whittle.component.html',
  styleUrls: ['./whittle.component.css']
})
export class WhittleComponent implements OnInit {

  public currentFork: ForkDto;
  public matches: ComparisonDto[];
  public numMatches;

  constructor(
    private whittleApi: WhittlerClient) { 
  }

  ngOnInit(): void {
    this.whittleApi.getCurrentFork().subscribe(
      forkResult =>
      {
        this.currentFork = forkResult;
      },
      error => {
        this.currentFork = ForkDto.fromJS({"id": "0", "leftBranch": "ppp", "rightBranch": "ooo"});
      });


    this.whittleApi.getComparisons(3, 100).subscribe(
      matchResult =>
      {
        this.matches = matchResult;
        this.numMatches = this.matches.length;
      },
      error => {
        this.matches = [];
        this.numMatches = 0;
      })
  }

  forkLeft() {
    console.log("went left");
    this.fork(true);
  }

  forkRight() {
    console.log("went right");
    this.fork(false);
  }

  fork(left) {
    this.whittleApi.takeCurrentFork(left).subscribe(
      forkResult =>
      {
        this.currentFork = forkResult;

        this.whittleApi.getComparisons(3, 100).subscribe(
          matchResult =>
          {
            this.matches = matchResult;
            this.numMatches = this.matches.length;
          },
          error => {
          })

      },
      error => {
      })
  }
}
