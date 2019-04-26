import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-cliente',
  templateUrl: './cadastro-de-cliente.page.html',
  styleUrls: ['./cadastro-de-cliente.page.scss'],
})
export class CadastroDeClientePage implements OnInit {

  formGroup: FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true}
  
  constructor(public formBuilder : FormBuilder,
              public router : Router) { 

    this.formGroup = this.formBuilder.group({
      nome : [''],
      telefone : [''],
      email : [''],
    })
  }

  ngOnInit() {
  }

  cadastrar(){
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/list']);
      }).catch(()=>{
        console.log('Erro ao cadastrar');
      })
  }
}
