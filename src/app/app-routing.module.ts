import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent
  },
  {
    path:'product-add',
    component:ProductAddComponent
  },
  {
    path:'search/:data',
    component:SearchComponent
  },
  {
    path:'product/:ProductId',
    component:ProductDetailComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
