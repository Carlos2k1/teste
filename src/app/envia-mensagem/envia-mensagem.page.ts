import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-envia-mensagem',
  templateUrl: './envia-mensagem.page.html',
  styleUrls: ['./envia-mensagem.page.scss'],
})
export class EnviaMensagemPage implements OnInit {


  formGroup: FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true}

  constructor(public formBuilder : FormBuilder,
              public router : Router,
              public loadingController: LoadingController,
              public toastController : ToastController) { 

      this.formGroup = this.formBuilder.group({
        titulo : [''],
        texto : [''],
        data : [''],
      })

     }

  ngOnInit() {
  }

  cadastrar(){

    this.loading();

    let ref = this.firestore.collection('mensagem')
    ref.add(this.formGroup.value)
      .then(() =>{
        this.toast("Enviado com Sucesso");
        console.log('Enviado com sucesso');
        this.router.navigate(['/mensagem']);
        this.loadingController.dismiss();
      }).catch(()=>{
        console.log('Erro ao cadastrar');
        this.toast("Erro ao cadastrar");
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
      message: 'Enviado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

}
