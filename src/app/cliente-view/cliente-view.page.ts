import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.page.html',
  styleUrls: ['./cliente-view.page.scss'],
})
export class ClienteViewPage implements OnInit {

  cliente : Cliente = new Cliente();
  id : string;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  formGroup : FormGroup;

  constructor(public activactedRoute : ActivatedRoute,
  public formBuilder : FormBuilder,
  public router : Router,
  public loadingController: LoadingController,
  public toastController : ToastController) { 
    this.id = this.activactedRoute.snapshot.paramMap.get('cliente');
    this.form();
  }

  form(){
    this.formGroup = this.formBuilder.group({
      nome : [this.cliente.nome],
      telefone : [this.cliente.telefone],
      email : [this.cliente.email],
    });
  }

  ngOnInit() {
    this.obterCliente();
  }

  obterCliente(){
    var ref = firebase.firestore().collection("cliente").doc(this.id);
    ref.get().then(doc => {
      
      this.cliente.setDados(doc.data());
      this.form();
      console.log(this.cliente); 

    }).catch(function(error){
      console.log("N Funfou");
    })
  }

  atualizar(){

    this.loading();

    let ref = this.firestore.collection('cliente')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        this.toast("Atualizado com Sucesso");
        console.log('Atualizado com Sucesso');
        this.router.navigate(["/lista-de-clientes"]);
        this.loadingController.dismiss();
      }).catch(()=>{
        console.log('Erro ao Atualizar');
        this.toast("Erro ao Atualizar");
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }


  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Atualizado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

}
