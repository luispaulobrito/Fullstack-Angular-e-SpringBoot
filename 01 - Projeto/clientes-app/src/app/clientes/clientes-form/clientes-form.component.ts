import { ClientesService } from './../../clientes.service';
import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente: Cliente;

  constructor( private service: ClientesService){
    this.cliente = service.getCliente();
  }
  ngOnInit() : void{
  }

  onSubmit(){
    console.log(this.cliente);
  }
}
