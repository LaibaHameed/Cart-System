import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './main-portal/cart/cart.component';
import { HomeComponent } from './main-portal/home/home.component';
import { ProductsComponent } from './main-portal/products/products.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "cart", component:CartComponent},
  {path: "products", component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
