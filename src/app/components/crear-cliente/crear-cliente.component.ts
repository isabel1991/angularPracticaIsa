import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';
import {MessageService} from 'primeng/api';
import { analyzeAndValidateNgModules, NullTemplateVisitor } from '@angular/compiler';

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
  contactName: string="";
  contactTitle: string="";
  address: {
      street:"",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      phone: "",
  };

  cliente: Client;
  loading = true;
  mensaje=false;
  constructor(
    private ClienteServiceService: ClientesServiceService,
    private formBuiler: FormBuilder,
    private messageService: MessageService
  ) {


  }

  async ngOnInit(): Promise<void> {
    this.resultados = await this.ClienteServiceService.getAllCustomers();

    this.formulario = this.formBuiler.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        companyName: ['', [Validators.required, Validators.minLength(6)]],

      }
    );

    this.loading=false;
  }

  async createCl(){
    let clien: Client = {
      contactName:this.formulario.get('name').value,
      companyName: this.formulario.get('companyName').value,
      contactTitle: null,
      address:{
      street: null,
      city:null,
      region: null,
      postalCode: null,
      country: null,
      phone: null,
    }

    }
    

    console.log(clien);
    await this.ClienteServiceService.createCustomer(clien);
    this.resultados = await this.ClienteServiceService.getAllCustomers();
    this.formulario.reset();
    this.mensaje=true;
    this.messageService.add({severity:'success', summary:'Cliente creado con éxito'});
  //  window.location.reload();//recarga componente
  }



}
