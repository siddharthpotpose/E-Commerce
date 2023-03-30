import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
constructor(private obj:ServicesService){}

productsForm:FormGroup=new FormGroup({
  CompanyProduct:new FormControl(''),
  Price:new FormControl(''),
  Specification:new FormControl(''),
  color:new FormControl(''),
   image:new FormControl(''),
   id:new FormControl(''),
})

productsDataAdd(){
  this.obj.postProducts(this.productsForm.value).subscribe(res=>console.log(res))
  alert('"Successfully Added Product"')
}
}
