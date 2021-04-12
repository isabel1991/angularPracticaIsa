import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  loading=true;
  resultados: Client[];


  constructor(
    private ClientesService : ClientesServiceService,
    private messageService: MessageService
    ) { }


  async ngOnInit(): Promise<void> {
    this.resultados = await this.ClientesService.getAllCustomers();
    const status: any = await this.ClientesService.checkStatus();

    if (status.status != 'ok') {
      this.messageService.add({
        severity: 'error',
        detail: status.message,
      });
      this.loading=false;
      //console.error('Something went wrong');
    }



  }



}
