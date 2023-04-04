import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { signup } from '../data-type';
import { NgIf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signup){
this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((res)=>
{

  localStorage.setItem('seller',JSON.stringify(res.body))
  this.router.navigate(["seller-home"])

}
) }
userLogin(data:signup){

  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>
  {
    if(res && res.body && res.body.length){
    localStorage.setItem('seller',JSON.stringify(res.body))
    this.router.navigate(["seller-home"])
    }
    else {
      alert(' try again ! email or password not match.')
    }
  })

}
getData(){
  return this.http.get(`http://localhost:3000/products`)
}
postProducts(body:any){
  return this.http.post(`http://localhost:3000/products`,body)
}
deleteProduct(id:number){
  return this.http.delete(`http://localhost:3000/products/${id}`)
}

productget(){
  return this.http.get(`http://localhost:3000/products?_limit=3`)
}
topProducts(){
return this.http.get(`http://localhost:3000/products?_limit=9`)
}

}
