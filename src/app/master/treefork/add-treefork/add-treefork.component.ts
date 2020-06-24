import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ForkClient, TreeClient, ForkDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-treefork',
  templateUrl: './add-treefork.component.html',
  styleUrls: ['./add-treefork.component.css']
})
export class AddTreeforkComponent implements OnInit {

  public addTreeForkForm: FormGroup;

  public forks$: Observable<ForkDto[]>;

  constructor(
    public dialogRef: MatDialogRef<AddTreeforkComponent>,
    private forkClient: ForkClient,
    private treeClient: TreeClient
  ) { 
    this.initForm();
  }

  initForm() {
    this.addTreeForkForm = new FormGroup({
      forkId: new FormControl()
    });
  }

  ngOnInit(): void {
    this.forks$ = this.forkClient.getForks();
  }

  
  add() {

    let treeForkId = this.addTreeForkForm.get("forkId").value;

    this.treeClient.appendTreeFork(treeForkId).subscribe(
      result =>
      {
        this.dialogRef.close(true);
      },
      error => {
      })
  }

}
