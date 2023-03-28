import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { signup } from '../data-type';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {

  showLogin=false;

  constructor(private obj:ServicesService){}

  Login(){
    this.showLogin=true;
  }
  SignUp(){
    this.showLogin=false;
  }

  SignUpForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  LoginForm:FormGroup = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  });

  signUpUser(data:signup){
    this.obj.userSignUp(this.SignUpForm.value)
  }
  loginUser(){
    this.obj.userLogin(this.LoginForm.value)

  }




}
