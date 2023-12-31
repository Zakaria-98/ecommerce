import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./main/main.module").then(m => m.MainModule) ,
  },
  {
    path: 'cart',
    loadChildren: () => import("./card/card.module").then(m => m.CardModule) ,
  },
  {
    path: 'categories',
    loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule) ,
  },
  {
    path: 'info',
    loadChildren: () => import("./productinfo/productinfo.module").then(m => m.ProductinfoModule) ,
  }
  ,
  {
    path: 'orders',
    loadChildren: () => import("./orders/orders.module").then(m => m.OrdersModule) ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
