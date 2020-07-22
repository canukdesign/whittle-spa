import { Component, OnInit } from '@angular/core';
import { WhittlerClient, Comparison } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public comparisons: Comparison[];
  public numComparisons;

  constructor(
    private whittlerClient: WhittlerClient) { 
  }

  ngOnInit(): void {
    this.whittlerClient.getComparisons(3, 100).subscribe(
      comparisonsResult =>
      {
        this.comparisons = comparisonsResult;
        this.numComparisons = this.numComparisons.length;
      },
      error => {
      })
  }
}
