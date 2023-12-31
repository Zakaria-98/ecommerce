import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(public dialog: MatDialog) { 
    
  }
orders:any=[];
isemptycart:any;
  ngOnInit(): void {
    if(localStorage.getItem('order')!=null)
    this.isemptycart=false
    if(localStorage.getItem('order')==null)
    this.isemptycart=true

    JSON.parse(localStorage.getItem('order')|| '[]').forEach((item: any) => { 
                 
      this.orders.push(item);
      

  });
    console.log(this.orders);
    

  }

  vieworder(){
    const dialogRef =this.dialog.open(ViewComponent, {
            
      width:'900px',
      height:'500px',
      data:{
      title: 'إضافة واقعة ',
      Message: 'هل انت متأكد من عملية الحدف؟',
    }
      
    })

  }

}
