import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Question, QuestionClient } from 'src/app/core/services/whittle-api/whittle-api.service';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dupleid', 'height'];
  questionsDataSource: MatTableDataSource<Question>;
  
  constructor(
    public dialog: MatDialog,
    private questionClient: QuestionClient) { 
  }

  refresh() {
    this.questionClient.getQuestions().subscribe(
      result =>
      {
        this.questionsDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

  ngOnInit(): void {
    this.refresh()
  }

  newQuestion() {
    let dialogRef = this.dialog.open(AddQuestionComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(forkAdded => {if (forkAdded) {this.refresh()}});
  }

}
