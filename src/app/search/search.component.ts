import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
resultSearch:any;
  constructor(private activate:ActivatedRoute, private product:ServicesService){}
  ngOnInit(): void {
    let query = this.activate.snapshot.paramMap.get('data')
    console.log(query)
    query && this.product.searchProducts(query).subscribe((res)=>{
   this.resultSearch=res
    })
  }




}
