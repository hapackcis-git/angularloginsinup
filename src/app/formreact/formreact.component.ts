import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formreact',
  templateUrl: './formreact.component.html',
  styleUrls: ['./formreact.component.css']
})
export class FormreactComponent implements OnInit {
  formReact!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formReact = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      mobile:  new FormControl('', [Validators.required])    })


  }


  submit() {
    var email = this.formReact.get('email')?.value;
    var password = this.formReact.get('password')?.value;
    var mobile = this.formReact.get('mobile')?.value;
    console.log(email, password, mobile);
  }
  SetData() {
    this.formReact.patchValue({
      email: 'amit@gmail.com',
      password: 'mobile',

    })
  }
  reset() {
    this.formReact.reset();
  }
  get email(){
  return this.formReact.get('email')
}
  get password(){
  return this.formReact.get('password');

}
  get mobile(){
  return this.formReact.get('mobile');
}

}
