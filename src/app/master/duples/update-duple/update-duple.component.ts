import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DupleClient, Duple } from 'src/app/core/services/whittle-api/whittle-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-duple',
  templateUrl: './update-duple.component.html',
  styleUrls: ['./update-duple.component.css']
})
export class UpdateDupleComponent implements OnInit {

  public dupleId: string;
  public duple: Duple;
  public updateDupleForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    public dialogRef: MatDialogRef<UpdateDupleComponent>,
    private dupleClient: DupleClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.updateDupleForm = new FormGroup({
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
      inUse: new FormControl()
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dupleId = params.get('id');
      this.dupleClient.getDuple(this.dupleId).subscribe(
        result => {
          this.duple = result;
          this.updateDupleForm.patchValue(this.duple)
        },
        error => {}
      )})
  }
  
  updateDuple() {
    let model = new Duple();
    model.init(this.updateDupleForm.getRawValue());

    this.dupleClient.updateDuple(this.dupleId, model).subscribe(
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
