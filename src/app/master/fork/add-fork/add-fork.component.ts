import { Component, OnInit } from '@angular/core';
import { ForkClient, ForkModel } from 'src/app/core/services/whittle-api/whittle-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fork',
  templateUrl: './add-fork.component.html',
  styleUrls: ['./add-fork.component.css']
})
export class AddForkComponent implements OnInit {

  public addForkForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddForkComponent>,
    private forkClient: ForkClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.addForkForm = new FormGroup({
      leftBranchLabel: new FormControl(),
      rightBranchLabel: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  
  add() {
    let model = new ForkModel();
    model.init(this.addForkForm.getRawValue());

    this.forkClient.addFork(model).subscribe(
      result =>
      {
        this.dialogRef.close(true);
      },
      error => {
      })
  }
      // let dialogRef = dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
}
