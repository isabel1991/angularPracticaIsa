import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
 
  loading=true;
 @Input() cliente: Client;

  
  
  constructor() { }

  ngOnInit(): void {
  
    console.log(this.cliente);
    this.loading=false;
      
   }


}
