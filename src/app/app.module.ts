import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Para las cards de cada cliente
import {CardModule} from 'primeng/card';

//Partes para formulario, aquí ya activamos ReactiveFroms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';


//Para el menú bar
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

//Para los mensajes de error
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

//Para botones
import {ButtonModule} from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';

//Spinner
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnersAngularModule } from 'spinners-angular';

//Componentes
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { BuscarClienteComponent } from './components/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CustomerComponent } from './components/buscar-cliente/customer/customer.component';
import { AboutComponent } from './components/about/about.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    ListadoClientesComponent,
    BuscarClienteComponent,
    CrearClienteComponent,
    CustomerComponent,
    AboutComponent,
    EditCustomerComponent,
    EditCustomerComponent,
    LoginComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    MessageModule,
    BrowserAnimationsModule,
    MessagesModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    ProgressSpinnerModule,
    SpinnersAngularModule,

  ],
  exports:[MatButtonModule],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
