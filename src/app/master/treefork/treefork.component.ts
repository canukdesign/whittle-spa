import { Component, OnInit } from '@angular/core';
import { TreeClient, TreeForkDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddTreeforkComponent } from './add-treefork/add-treefork.component';


@Component({
  selector: 'app-treefork',
  templateUrl: './treefork.component.html',
  styleUrls: ['./treefork.component.css']
})
export class TreeforkComponent implements OnInit {

  displayedColumns: string[] = ['id', 'forkid', 'height'];
  treeForksDataSource: MatTableDataSource<TreeForkDto>;
  
  constructor(
    public dialog: MatDialog,
    private treeClient: TreeClient) { 
  }

  refresh() {
    this.treeClient.getTreeForks().subscribe(
      result =>
      {
        this.treeForksDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

  ngOnInit(): void {
    this.refresh()
  }

  newTreeFork() {
    let dialogRef = this.dialog.open(AddTreeforkComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(forkAdded => {if (forkAdded) {this.refresh()}});
  }

}