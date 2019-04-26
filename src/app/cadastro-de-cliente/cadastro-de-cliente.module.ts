import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDeClientePage } from './cadastro-de-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroDeClientePage]
})
export class CadastroDeClientePageModule {}
