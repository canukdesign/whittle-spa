import { Component, OnInit } from '@angular/core';
import { ForkClient, ForkDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddForkComponent } from './add-fork/add-fork.component';
import { SelectionModel } from '@angular/cdk/collections';
import { UpdateForkComponent } from './update-fork/update-fork.component';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.css']
})
export class ForkComponent implements OnInit {

  displayedColumns: string[] = ['id', 'leftbranch', 'rightbranch', 'intree'];
  forksDataSource: MatTableDataSource<ForkDto>;
  selection = new SelectionModel<ForkDto>(false, []);
  
  constructor(
    public dialog: MatDialog,
    private forkClient: ForkClient) { 
  }

  refresh() {
    this.forkClient.getForks().subscribe(
      result =>
      {
        this.forksDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

  ngOnInit(): void {
    this.refresh();
  }

  newFork() {
    let dialogRef = this.dialog.open(AddForkComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(forkAdded => {if (forkAdded) {this.refresh()}});
  }

  editFork(row) {
    let dialogRef = this.dialog.open(UpdateForkComponent, {
      data: row,
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(forkAdded => {if (forkAdded) {this.refresh()}});

  }

}
