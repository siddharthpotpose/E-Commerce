import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proData:any;
  constructor(private productData:ServicesService){}
  ngOnInit(): void {
   this.productData.getData().subscribe(res=>{this.proData=res, console.log(res)})

  }



}
