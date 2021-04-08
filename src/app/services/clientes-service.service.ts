import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';


@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor(private http: HttpClient) {

   }



  getAllCustomers2() {
    let res = this.http.get('https://northwind.now.sh/api/customers');
    console.log(res);
    return res;
  }

  async getAllCustomers(): Promise<Client[]>{
    return await this.http.get<Client[]>(environment.clientesApi).toPromise();
    
  }

  async getCustomerByName(contactname: string):Promise<Client[]>{
    let res= await this.http.get<Client[]>(environment.clientesApi+'/?contactName='+contactname).toPromise();
    return res;
 }

  async createCustomer(cliente: Client){
    let res = await this.http.post("https://northwind.now.sh/api/customers", cliente).toPromise();
    return res;
  }



  async checkStatus() {
    let res;
    try {
      res = await this.http.get(environment.clientesApi).toPromise();
    } catch (error) {
      // console.warn(error)
      res = {
        status: 'Something went wrong',
        message: error.message,
      };
    }
    return res;
  }



}
