import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  products:any;
  constructor(private obj:ServicesService){}
  ngOnInit(): void {
    this.obj.getData().subscribe(res=>this.products=res)
  }
  deleteProdcuts(id:number){
    this.obj.deleteProduct(id).subscribe(res=>console.log(res))
    alert('delete Successfully - refresh page')
  }



}
