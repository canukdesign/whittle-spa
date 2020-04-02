import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Whittler, WhittleApiClient } from 'src/app/core/services/whittle-api/whittle-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whittler-profile',
  templateUrl: './whittler-profile.component.html',
  styleUrls: ['./whittler-profile.component.css']
})
export class WhittlerProfileComponent implements OnInit {

  public profile: Whittler;
  public whittlerProfileForm: FormGroup;

  constructor(
      private router: Router,
      private whittleApi: WhittleApiClient) { 
    this.initForm();
  }

  initForm() {
    this.whittlerProfileForm = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Email: new FormControl()
    })
  }
  ngOnInit(): void {
    this.whittleApi.profile().subscribe(
      profileResult =>
      {
        this.profile = profileResult;
      },
      error => {
      })

  }

  onSubmit() {
    
    console.warn(this.whittlerProfileForm.value);

  }

  whittle() {
    this.router.navigate(["whittler"]);
  }


}
