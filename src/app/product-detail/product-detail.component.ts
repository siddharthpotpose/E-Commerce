import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
showData:any;
productQuantity:number=1;
  constructor(private product:ServicesService,private active:ActivatedRoute){}
  ngOnInit(): void {
    let productData=this.active.snapshot.paramMap.get('ProductId')
    console.log(productData)
    productData && this.product.getProductById(productData).subscribe((res)=>{
   this.showData=res;
    })
  }
  addProductMin(val:string){
if(this.productQuantity<=9 && val === 'add'){
this.productQuantity+=1
}
else if( this.productQuantity>1 && val === 'min'){
 this.productQuantity-=1;
}
  }
}
