import { isGeneratedFile } from '@angular/compiler/src/aot/util';
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
  loading=true;
   error= false;

  constructor(private clienteService: ClientesServiceService) { }

 async ngOnInit(): Promise<void>{

  this.resultados = await this.clienteService.getAllCustomers();
  this.loading=false;
  }

  async busqueda(){

      this.resultados = await this.clienteService.getCustomerByName(this.query);
      this.error=false;
      if(this.resultados.length==0) {
        this.resultados = await this.clienteService.getAllCustomers();
        if(this.query=='' || this.query==null){
          this.error=false;

        }else{
          this.error=true;
        }
      }

      console.warn(this.resultados);

  }


}
