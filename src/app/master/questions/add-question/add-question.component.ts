import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Question, DupleClient, QuestionClient, Duple } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public addQuestionForm: FormGroup;

  public duples$: Observable<Duple[]>;

  constructor(
    public dialogRef: MatDialogRef<AddQuestionComponent>,
    private dupleClient: DupleClient,
    private questionClient: QuestionClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.addQuestionForm = new FormGroup({
      dupleId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.duples$ = this.dupleClient.getDuples();
  }

  
  addDuple() {

    let duple = this.addQuestionForm.get("dupleId").value;

    this.questionClient.addQuestion(duple).subscribe(
      result =>
      {
        this.dialogRef.close(true);
      },
      error => {
      })
  }

}

