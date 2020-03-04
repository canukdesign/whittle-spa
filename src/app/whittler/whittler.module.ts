import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhittleComponent } from './whittle/whittle.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [WhittleComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class WhittlerModule { }
