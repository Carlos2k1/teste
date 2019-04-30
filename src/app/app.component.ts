
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'person'
    },
    {
      title: 'Lista de Clientes',
      url: '/lista-de-clientes',
      icon: 'list'
    },
    {
      title: 'Cadastro de Clientes',
      url: '/cadastro-de-cliente',
      icon: 'add'
    },
    {
      title: 'Lista de Mensagem',
      url: '/mensagem',
      icon: 'mail'
    },
    {
      title: 'Enviar Mensagem',
      url: '/envia-mensagem',
      icon: 'add'
    }
  ];

  constructor(
    private firebaseauth : AngularFireAuth,
    private router : Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.firebaseauth.authState
    .subscribe(
      user => {
        if (user) {
          this.router.navigate(['/lista-de-clientes']);
          } else {
            this.router.navigate(['/home']);
          }
      },
      () => {
        this.router.navigate(['/lista-de-clientes']);
      }
    );
  
  }
}