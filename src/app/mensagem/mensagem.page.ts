import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
})
export class MensagemPage implements OnInit {

  listaDeMensagens: Mensagem[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public router: Router,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getList();
  }

  getList() {

    this.loading();

    var ref = firebase.firestore().collection("mensagem");
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Mensagem();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeMensagens.push(c);
      });
      console.log(this.listaDeMensagens);
      this.loadingController.dismiss();
    });
  }

  remove(obj: Mensagem) {
    var ref = firebase.firestore().collection("mensagem");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeMensagens = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  atualiza(obj: Mensagem) {

    this.router.navigate(['/view-mensagem', { 'mensagem': obj.id }])
  }

}
