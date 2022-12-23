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
  success: boolean = false;
  errors: String[]

  constructor( private service: ClientesService){
    this.cliente = new Cliente;
  }
  ngOnInit() : void{
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe( response => {this.success=true});
  }
}
