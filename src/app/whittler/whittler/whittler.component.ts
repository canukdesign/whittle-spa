import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { WhittlerClient, Question, Comparison } from 'src/app/core/services/whittle-api/whittle-api.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CircleComponent } from '../circle/circle.component';

@Component({
  selector: 'app-whittler',
  templateUrl: './whittler.component.html',
  styleUrls: ['./whittler.component.css']
})
export class WhittlerComponent implements OnInit {

  @ViewChild(CircleComponent)
  private circleComponent: CircleComponent;

  public choseA:boolean;

  constructor(
    public auth: AuthService,
    private whittlerClient: WhittlerClient) { 
  }

  ngOnInit(): void {
  }

  onWhittle(choseA:boolean) {
    this.choseA = choseA;
    this.circleComponent.refresh();
  }
}
