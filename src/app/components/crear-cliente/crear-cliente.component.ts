import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {
  formulario: FormGroup;
  resultados: any[];
  name:string="";
  companyName:string="";
  cliente: Client;
  loading = true;
  constructor(
    private ClienteServiceService: ClientesServiceService,
    private formBuiler: FormBuilder
  ) { 

 
  }

  async ngOnInit(): Promise<void> {
    this.resultados = await this.ClienteServiceService.getAllCustomers();
    console.log(this.resultados);
    this.formulario = this.formBuiler.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        companyName: ['', [Validators.required, Validators.minLength(6)]]
        
      }
    );

    this.loading=false;
  }

  async createCl(){
    let clien: Client = {
      contactName:this.formulario.get('name').value,
      companyName: this.formulario.get('companyName').value
    }
    console.log( this.formulario);
   
    console.log(clien);
    await this.ClienteServiceService.createCustomer(clien);

   window.location.reload();//recarga componente
  }

 

}
