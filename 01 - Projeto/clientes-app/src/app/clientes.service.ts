import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() {}

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Luis';
    cliente.cpf = '88888888888';
    return cliente;
  }
}
