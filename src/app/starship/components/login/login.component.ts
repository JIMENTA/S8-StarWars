import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  repeatedPassword: string;
  showSignIn: boolean;
  showLogIn: boolean;

  constructor(private router: Router, private fb: FormBuilder){
    this.showLogIn = true;
    this.showSignIn = false;
  }

  ngOnInit(): void {

    if(sessionStorage.getItem("email")){
      this.router.navigate(['/starships']);
    }      
  }

  doSignIn(){

    this.toggleSignIn();
    this.toggleLogIn();
    

    if(this.password === this.repeatedPassword){

      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);

      sessionStorage.setItem("email", this.email);
      sessionStorage.setItem("password", this.password);

        alert("Succesfully registered!");
        this.router.navigate(['/login']);
     }else{
       alert("Passwords don't match");
       this.router.navigate(['/login']);
     }
  }

  doLogIn(){

    this.toggleSignIn();
    this.toggleLogIn();
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if(email === this.email && password === this.password){
     this.router.navigate(['/starships'])
    } else {
      alert("Please Sign in to continue...");
    }
  }
 
  toggleSignIn(){
    this.showSignIn = !this.showSignIn
  }

  toggleLogIn(){
    this.showLogIn = !this.showLogIn
  } 
}


