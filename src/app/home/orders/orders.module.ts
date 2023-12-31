import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { OrdersComponent } from './orders/orders.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    OrdersComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatIconModule,
    MatDialogModule,

  ]
})
export class OrdersModule { }
