import { Component, OnInit, Inject } from '@angular/core';
import { ForkClient, ForkDto, ForkUpdateDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-fork',
  templateUrl: './update-fork.component.html',
  styleUrls: ['./update-fork.component.css']
})
export class UpdateForkComponent implements OnInit {

  public updateForkForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ForkDto,
    public dialogRef: MatDialogRef<UpdateForkComponent>,
    private forkClient: ForkClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.updateForkForm = new FormGroup({
      leftBranch: new FormControl(),
      rightBranch: new FormControl(),
      inTree: new FormControl()
    });
  }

  ngOnInit(): void {
    this.updateForkForm.patchValue(this.data);
  }

  inTree() {
    return this.data.inTree;
  }

  update() {
    let model = new ForkUpdateDto();
    model.init(this.updateForkForm.getRawValue());

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
