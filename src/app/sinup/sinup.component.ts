import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {
  SinupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.SinupForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  SignUp() {
    this.http.post<any>("http://127.0.0.1:8000/api/register", this.SinupForm.value).subscribe(data => {
      alert("Registration Successfull");
      this.SinupForm.reset();
      this.router.navigate(['login'])

    }, err => {
      alert("Kuchh to galat hai")
    })

  }
  get name(){
    return this.SinupForm.get('name');
  }
  get email(){
    return this.SinupForm.get('email'); 
  }
  get mobile(){
    return this.SinupForm.get('email'); 
  }
  get password(){
    return this.SinupForm.get('password'); 
  }

}
