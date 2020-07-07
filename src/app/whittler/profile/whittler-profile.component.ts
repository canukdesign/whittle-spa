import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WhittlerClient, WhittlerDto, WhittlerProfileDto } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-whittler-profile',
  templateUrl: './whittler-profile.component.html',
  styleUrls: ['./whittler-profile.component.css']
})
export class WhittlerProfileComponent implements OnInit {

  public profile: WhittlerProfileDto;
  public whittlerProfileForm: FormGroup;

  constructor(
      private whittleApi: WhittlerClient) { 
    this.initForm();
  }

  initForm() {
    this.whittlerProfileForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
    this.whittleApi.getProfile().subscribe(
      profileResult =>
      {
        this.profile = profileResult;
        this.whittlerProfileForm.patchValue(profileResult.toJSON());
      },
      error => {
      })
  }

  onSubmit() {
    console.warn(this.whittlerProfileForm.value);

  }
}
