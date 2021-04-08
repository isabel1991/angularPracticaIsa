import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';



@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.scss']
})
export class BuscarClienteComponent implements OnInit {

 
   query: string;
   resultados: Client[];
   exito=false;

  constructor(private clienteService: ClientesServiceService) { }

 async ngOnInit(): Promise<void>{

  this.resultados = await this.clienteService.getAllCustomers();
   
  }

  async busqueda(){
    
      this.resultados = await this.clienteService.getCustomerByName(this.query);

      if(this.resultados){     
        
        this.exito=false;

      }else {

        this.exito=true;
        
      }

      console.warn(this.resultados);
    
  }


}
