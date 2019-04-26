import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {

  listaDeClientes : Cliente[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor() { }

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

}
