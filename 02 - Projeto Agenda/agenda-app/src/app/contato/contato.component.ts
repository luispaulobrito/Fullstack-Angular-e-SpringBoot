import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContatoDetalheComponent } from '../contato-detalhe/contato-detalhe.component';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  contatos: Contato[] = [];
  colunas = ['foto','id', 'nome', 'email', 'favorito']
  totalElementos = 0;
  pagina = 0;
  tamanho = 5;
  pageSizeOptions : number[] = [5];

  constructor(
    private service : ContatoService,
    private fb : FormBuilder,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ){
    this.formulario = this.fb.group({});
  }

  ngOnInit(): void {
    this.montarFormulario();
    this.listarContatos(this.pagina, this.tamanho);
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      nome : ['', Validators.required],
      email : ['', [Validators.email, Validators.required]]
    })
  }

  listarContatos(pagina: number, tamanho: number){
    this.service.list(pagina, tamanho).subscribe(response => {
      this.contatos = response.content;
      this.totalElementos = response.totalElements;
      this.pagina = response.number;
    })
  }

  favoritar( contato : Contato){
    this.service.favorite(contato).subscribe(response => {
      contato.favorito = !contato.favorito;
    })
  }

  submit(){
    const formValues = this.formulario.value
    const contato : Contato = new Contato(formValues.nome, formValues.email)
    this.service.save(contato).subscribe(resposta => {
      this.listarContatos(this.pagina, this.tamanho);
      this.snackBar.open('O contato foi adicionado com sucesso!', 'Sucesso', { duration: 2000})
      this.formulario.reset();
    })
  }

  uploadFoto(event: any, contato: Contato){
    const files = event.target.files;
    if (files) {
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append("foto", foto);
      this.service
            .upload(contato, formData)
            .subscribe( response => this.listarContatos(this.pagina, this.tamanho));
    }
  }

  visualizarContato( contato : Contato ){
    this.dialog.open( ContatoDetalheComponent, {
      width: '450px',
      height: '450px',
      data: contato
    })
  }

  paginar( event: PageEvent){
    this.pagina = event.pageIndex;
    this.listarContatos(this.pagina, this.tamanho)
  }
}
