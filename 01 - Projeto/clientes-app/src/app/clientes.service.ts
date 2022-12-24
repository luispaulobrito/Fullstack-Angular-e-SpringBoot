import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient) {}

  salvar( cliente : Cliente ) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente);
  }

  // getClientes() : Observable<Cliente[]>{
  //   return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  // }

  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Luis';
    cliente.cpf = '01360478400';
    cliente.dataCadastro = '22/10/2022';
    return[cliente]
  }
}
