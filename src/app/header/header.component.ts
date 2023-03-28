import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: string = 'default';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
          this.data = 'seller';
        } else {
          this.data = 'default';
        }
      }
    });
  }
  logout(){
    localStorage.removeItem('seller')
    this.router.navigate([''])
  }
}
