import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-whittler-profile',
  templateUrl: './whittler-profile.component.html',
  styleUrls: ['./whittler-profile.component.css']
})
export class WhittlerProfileComponent implements OnInit {

  public whittlerProfileForm: FormGroup;

  constructor() { 
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
  }

  onSubmit() {
    console.warn(this.whittlerProfileForm.value);
  }

}
