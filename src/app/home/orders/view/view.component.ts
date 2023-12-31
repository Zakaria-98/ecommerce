import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: string
  
  ,private dialogRef: MatDialogRef<ViewComponent>) { 
    
  }

  title:any;
name:any;
cart_products:any;
  ngOnInit(): void {



  this.cart_products=JSON.parse(localStorage.getItem('details')|| '[]');
  console.log(this.cart_products);
  
  


  }


}
