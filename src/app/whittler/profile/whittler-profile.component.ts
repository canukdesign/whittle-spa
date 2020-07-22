import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WhittlerClient, Profile } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-whittler-profile',
  templateUrl: './whittler-profile.component.html',
  styleUrls: ['./whittler-profile.component.css']
})
export class WhittlerProfileComponent implements OnInit {

  public profile: Profile;
  public profileForm: FormGroup;

  constructor(
      private whittlerClient: WhittlerClient) { 
    this.initForm();
  }

  initForm() {
    this.profileForm = new FormGroup({
      city: new FormControl(),
      country: new FormControl(),
      email: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      sexualOrientation: new FormControl()
    })
  }

  ngOnInit(): void {
    this.whittlerClient.getProfile().subscribe(
      profileResult =>
      {
        this.profile = profileResult;
        this.profileForm.patchValue(profileResult.toJSON());
      },
      error => {
      })
  }

  onSubmit() {
    console.warn(this.profileForm.value);

  }
}
