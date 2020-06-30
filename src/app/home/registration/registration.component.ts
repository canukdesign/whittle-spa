import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WhittlerClient, RegistrationModel } from 'src/app/core/services/whittle-api/whittle-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
      private router: Router,
      private whittlerClient: WhittlerClient) { 
    this.initForm();
  }

  initForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let registrationModel = RegistrationModel.fromJS(this.registrationForm.getRawValue());
    this.whittlerClient.register(registrationModel).subscribe(
      profileResult =>
      {
        this.router.navigate(["whittler/profile"]);
      },
      error => {
        alert("Registration failed...");
      })
  }
 
}
