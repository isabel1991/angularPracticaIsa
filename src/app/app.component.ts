import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: "Clientes";
  query: any;
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/',
    },

    {
      label: 'Search',
      icon: 'pi pi-fw pi-search',
      routerLink: 'buscar',
    },

    {
      label: 'Nuevo',
      icon: 'pi pi-fw pi-user-plus',
      routerLink: 'crear',
    },

    {
      label: '¿Quiénes somos?',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: 'about',
    },

    {
      label: 'Login',
      icon: 'pi pi-fw pi-usercle',
      routerLink: 'login',
    }

  ];

  capturaEvento(evento: any) {
    console.log(evento);
  }

  busqueda(query: any) {
    this.query = query;
  }

}
