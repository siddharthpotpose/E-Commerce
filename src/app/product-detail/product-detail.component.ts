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
  constructor(private product:ServicesService,private active:ActivatedRoute){}
  ngOnInit(): void {
    let productData=this.active.snapshot.paramMap.get('ProductId')
    console.log(productData)
    productData && this.product.getProductById(productData).subscribe((res)=>{
   this.showData=res;
    })
  }
}
