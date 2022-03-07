import { Component, OnInit } from '@angular/core';
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
  showSignIn : boolean;
  showRegister: boolean;
  

  constructor(private router: Router){}

  doSignIn(){

    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("repeatPassaword", this.repeatedPassword)
    if(localStorage.getItem("email") === this.email && localStorage.getItem("password") === this.password ){
      this.router.navigate(['/starships'])
     }

  }

  doLogIn(){
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password")
    if(email === this.email && password === this.password ){
     this.router.navigate(['/starships'])
    } else {
      alert('Resgitrate')
    }
  }
 
  toggleSignIn(){
    this.showSignIn = !this.showSignIn
  }
  toogleRegister(){
    this.showRegister = !this.showRegister
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("email")){
      this.router.navigate(['/starships'])
    } else{
      this.router.navigate(['/login'])
    }
  }

}