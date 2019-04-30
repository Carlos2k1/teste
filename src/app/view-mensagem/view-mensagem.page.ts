import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../model/mensagem';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-mensagem',
  templateUrl: './view-mensagem.page.html',
  styleUrls: ['./view-mensagem.page.scss'],
})
export class ViewMensagemPage implements OnInit {

  mensagem : Mensagem = new Mensagem();
  id : string;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  formGroup : FormGroup;

  constructor(public activactedRoute : ActivatedRoute,
  public formBuilder : FormBuilder,
  public router : Router,
  public loadingController: LoadingController,
  public toastController : ToastController) { 
    this.id = this.activactedRoute.snapshot.paramMap.get('mensagem');
    this.form();
  }

  form(){
    this.formGroup = this.formBuilder.group({
      titulo : [this.mensagem.titulo],
      texto : [this.mensagem.texto],
      data : [this.mensagem.data],
    });
  }

  ngOnInit() {
    this.obterMensagem();

  }

  obterMensagem(){
    var ref = firebase.firestore().collection("mensagem").doc(this.id);
    ref.get().then(doc => {
      
      this.mensagem.setDados(doc.data());
      this.form();
      console.log(this.mensagem); 
      
    }).catch(function(error){
      console.log("N Funfou");
    })
  }

  atualizar(){

    this.loading();

    let ref = this.firestore.collection('mensagem')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        this.toast("Atualizado com Sucesso");
        console.log('Atualizado com Sucesso');
        this.router.navigate(["/mensagem"]);
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
