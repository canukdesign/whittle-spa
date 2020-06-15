import { Component, OnInit } from '@angular/core';
import { TreeClient, TreeForkDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-treefork',
  templateUrl: './treefork.component.html',
  styleUrls: ['./treefork.component.css']
})
export class TreeforkComponent implements OnInit {

  displayedColumns: string[] = ['id', 'forkid', 'height'];
  treeForksDataSource: MatTableDataSource<TreeForkDto>;
  
  constructor(
    private treeClient: TreeClient) { 
  }

  ngOnInit(): void {
    this.treeClient.getTreeForks().subscribe(
      result =>
      {
        this.treeForksDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

}