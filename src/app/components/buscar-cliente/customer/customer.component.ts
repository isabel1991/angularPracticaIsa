import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  loading=true;
 @Input() cliente: Client;
  hiddenViewClientButton=false;


  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService : ClientesServiceService
  ) { }

 async ngOnInit(): Promise<void> {

    console.log(this.cliente);
    if(this.cliente){
      this.loading=false;
    }else{
      this.cliente = await this.clienteService.getCustomerById
      (this.activateRoute.snapshot.paramMap['params']['id']);
      //para ocultar los botones cuando muestre el cliente en concreto
      this.hiddenViewClientButton=true;
      this.loading=false;
    }


   }

   async deleteCustomer(id:string){
    await this.clienteService.deleteCustomer(id);
    
  }

}
