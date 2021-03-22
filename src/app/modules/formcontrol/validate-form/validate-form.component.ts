import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    cid: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{13}/)]),
    mobileNo: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{10}/)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void{
    if (this.profileForm.valid){
    }
  }

}
