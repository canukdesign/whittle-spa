import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WhittlerClient, Question, Comparison } from 'src/app/core/services/whittle-api/whittle-api.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-whittle',
  templateUrl: './whittle.component.html',
  styleUrls: ['./whittle.component.css']
})
export class WhittleComponent implements OnInit {

  @Output() whittled = new EventEmitter<boolean>();
  
  public currentQuestion: Question;
  public outOfQuestions: boolean = false;

  constructor(
    public auth: AuthService,
    private whittlerClient: WhittlerClient) { 
  }

  ngOnInit(): void {
    this.whittlerClient.getCurrentQuestion().subscribe(
      result =>
      {
        this.currentQuestion = result;
      },
      error => {
        this.outOfQuestions = true;
      });
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
        this.whittled.emit(choseA);
      },
      error => {
        this.outOfQuestions = true;        
      })    
  }
}
