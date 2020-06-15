import { Component, OnInit } from '@angular/core';
import { ForkClient, ForkDto } from 'src/app/core/services/whittle-api/whittle-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.css']
})
export class ForkComponent implements OnInit {

  displayedColumns: string[] = ['id', 'leftbranch', 'rightbranch'];
  forksDataSource: MatTableDataSource<ForkDto>;
  
  constructor(
    private forkClient: ForkClient) { 
  }

  ngOnInit(): void {
    this.forkClient.getForks().subscribe(
      result =>
      {
        this.forksDataSource = new MatTableDataSource(result);
      },
      error => {
      })
  }

}
