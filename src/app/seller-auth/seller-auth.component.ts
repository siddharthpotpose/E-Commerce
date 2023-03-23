import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {

  showLogin=false;


  SignUpForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  LoginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  });

  Login(){
    this.showLogin=true;
  }
  SignUp(){
    this.showLogin=false;
  }

}
