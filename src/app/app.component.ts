import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './@services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public load:LoadingService, private router:Router) { 
    
  }

  ngOnInit(): void {



}

homebutton(){
  this.router.navigateByUrl('home')

}

cartbutton(){
  this.router.navigateByUrl('home/cart')

}

ordersbutton(){
  this.router.navigateByUrl('home/orders')

}

}