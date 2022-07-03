import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }
  login(){
    this.http.get<any>("http://127.0.0.1:8000/api/getData").subscribe(data=>{
      console.log(data);
      const user=data.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      })
      if(user){
        alert("Login is SuccessFull ")
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
      else{
        alert("Usser Not Found !!")
      }
    })

  }

}
