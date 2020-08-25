import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Duple, DupleClient } from 'src/app/core/services/whittle-api/whittle-api.service';
import { AddDupleComponent } from '../add-duple/add-duple.component';
import { UpdateDupleComponent } from '../update-duple/update-duple.component';


@Component({
  selector: 'app-list-duples',
  templateUrl: './list-duples.component.html',
  styleUrls: ['./list-duples.component.css']
})
export class ListDuplesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'choiceAName', 'choiceADescription', 'choiceAImageId', 'choiceBName', 'choiceBDescription', 'choiceBImageId', 'inUse'];
  duplesDataSource: MatTableDataSource<Duple>;
  selection = new SelectionModel<Duple>(false, []);
  
  constructor(
    public dialog: MatDialog,
    private dupleClient: DupleClient) { 
  }

  refresh() {
    this.dupleClient.getDuples().subscribe(
      result =>
      {
        this.duplesDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

  ngOnInit(): void {
    this.refresh();
  }

  newDuple() {
    let dialogRef = this.dialog.open(AddDupleComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(dupleAdded => {if (dupleAdded) {this.refresh()}});
  }

  editDuple(row) {
    let dialogRef = this.dialog.open(UpdateDupleComponent, {
      data: row,
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(dupleAdded => {if (dupleAdded) {this.refresh()}});

  }

}
