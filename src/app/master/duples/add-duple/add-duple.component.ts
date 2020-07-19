import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DupleClient, Duple } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-add-duple',
  templateUrl: './add-duple.component.html',
  styleUrls: ['./add-duple.component.css']
})
export class AddDupleComponent implements OnInit {

  public addDupleForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDupleComponent>,
    private dupleClient: DupleClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.addDupleForm = new FormGroup({
      choiceA: new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        imageId: new FormControl()
      }),
      choiceB: new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        imageId: new FormControl()
      }),
    });
  }

  ngOnInit(): void {
  }

  
  add() {
    let model = new Duple();
    model.init(this.addDupleForm.getRawValue());

    this.dupleClient.addDuple(model).subscribe(
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
