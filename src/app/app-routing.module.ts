import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscarClienteComponent } from './components/buscar-cliente/buscar-cliente.component';
import { CustomerComponent } from './components/buscar-cliente/customer/customer.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';



const routes: Routes = [
  {
    path: '',
    component: ListadoClientesComponent
  },

  {
    path: 'buscar',
    component: BuscarClienteComponent
  },

  {
    path: 'customer/:id',
    component: CustomerComponent
  },


  {
    path:'crear',
    component: CrearClienteComponent
  },

  {
    path:'about',
    component: AboutComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }