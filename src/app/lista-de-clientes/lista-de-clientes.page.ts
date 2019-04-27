import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {

  listaDeClientes : Cliente[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public router : Router) { }

  ngOnInit() {
    this.getList();
  }

  getList() {

    var ref = firebase.firestore().collection("cliente");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Cliente();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaDeClientes.push(c);
        });
        console.log(this.listaDeClientes);
    });

  }

  remove(obj : Cliente){
    var ref = firebase.firestore().collection("cliente");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeClientes = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }

  atualiza(obj : Cliente){
    
    this.router.navigate(['/cliente-view', { 'cliente': obj.id }])
  }

}
