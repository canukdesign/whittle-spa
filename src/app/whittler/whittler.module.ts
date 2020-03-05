import { NgModule } from '@angular/core';

import { WhittleComponent } from './whittle/whittle.component';
import { WhittlerProfileComponent } from './profile/whittler-profile.component';
import { WhittlerRoutingModule } from './whittler-routing.module';
import { SharedModule } from '../core/shared.module';



@NgModule({
  declarations: [WhittleComponent, WhittlerProfileComponent],
  imports: [
    WhittlerRoutingModule,
    SharedModule
  ]
})
export class WhittlerModule { }
