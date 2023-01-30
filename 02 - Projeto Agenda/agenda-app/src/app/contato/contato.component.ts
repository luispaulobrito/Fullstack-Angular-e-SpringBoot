import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private service : ContatoService,
    private fb : FormBuilder
  ){
    this.formulario = this.fb.group({});
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome : ['', Validators.required],
      email : ['', [Validators.email, Validators.required]]
    })
  }

  submit(){
    const erroNomeRequired = this.formulario.controls['nome'].errors && this.formulario.controls['nome'].errors['required'];

    const erroEmailInvalido = this.formulario.controls['email'].errors && this.formulario.controls['email'].errors['email'];
    
    console.log('erroNomeRequired : ', erroNomeRequired);
    console.log('erroEmailInvalido : ', erroEmailInvalido);

    // this.service.save(c).subscribe(resposta => {
    //   console.log(resposta);
    // })
  }
}
