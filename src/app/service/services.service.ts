import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { signup } from '../data-type';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signup){
this.http.post("http://localhost:3000/seller",data).subscribe(res=>
{
  this.router.navigate(["seller-home"])
}
) }
userLogin(data:signup){

  this.http.get("http://localhost:3000/login?email=${data.email}&&password=${data.password}").subscribe(res=>
  {
    this.router.navigate(["seller-home"])
  })
}
}
