import { Component, OnInit } from '@angular/core';
import { WhittlerClient, Question, Comparison } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-whittle',
  templateUrl: './whittle.component.html',
  styleUrls: ['./whittle.component.css']
})
export class WhittleComponent implements OnInit {

  public currentQuestion: Question;
  public comparisons: Comparison[];
  public numComparisons: number;

  constructor(
    private whittlerClient: WhittlerClient) { 
  }

  ngOnInit(): void {
    this.whittlerClient.getCurrentQuestion().subscribe(
      result =>
      {
        this.currentQuestion = result;
      },
      error => {

      });


    this.whittlerClient.getComparisons(3, 100).subscribe(
      result =>
      {
        this.comparisons = result;
        this.numComparisons = this.comparisons.length;
      },
      error => {
        this.comparisons = [];
        this.numComparisons = 0;
      })
  }

  chooseA() {
    this.chose(true);
  }

  chooseB() {
    this.chose(false);
  }

  chose(choseA:boolean) {
    this.whittlerClient.answerCurrentQuestion(choseA).subscribe(
      result =>
      {
        this.currentQuestion = result;

        this.whittlerClient.getComparisons(3, 100).subscribe(
          result =>
          {
            this.comparisons = result;
            this.numComparisons = this.comparisons.length;
          },
          error => {
          })

      },
      error => {
      })
  }
}
