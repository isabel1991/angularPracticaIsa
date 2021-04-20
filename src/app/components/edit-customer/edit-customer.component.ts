import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';
import {MessageService} from 'primeng/api';


import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  loading=true;
  cliente: Client;
  resultados: Client[];
  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClientesServiceService,
    private router: Router,
    private location: Location,
    private messageService: MessageService
  ) { }


  async ngOnInit(): Promise<void> {
    this.cliente = await this.clienteService.getCustomerById
    (this.activateRoute.snapshot.paramMap['params']['id']);
    this.loading=false;

  }

  async submit(): Promise<void>{
    console.log(await this.clienteService.editCustomer(this.cliente));

    this.messageService.add({severity:'success', summary:'Cliente modificado con éxito'});
    this.router.navigate(['/']);

  }

  public goBack(): void {
    this.location.back();
  }

}
