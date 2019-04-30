import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'logoff',
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]
  },
  { 
    path: 'lista-de-clientes', 
    loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule'
  },
  { 
    path: 'cadastro-de-cliente',
    loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { 
    path: 'cliente-view', 
    loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' 
  },
  { 
    path: 'mensagem', 
    loadChildren: './mensagem/mensagem.module#MensagemPageModule' 
  },
  { 
    path: 'view-mensagem', 
    loadChildren: './view-mensagem/view-mensagem.module#ViewMensagemPageModule' 
  },
  { 
    path: 'envia-mensagem', 
    loadChildren: './envia-mensagem/envia-mensagem.module#EnviaMensagemPageModule' 
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
