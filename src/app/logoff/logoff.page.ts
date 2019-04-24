import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage {

  constructor(public fire : AngularFireAuth,
              public router : Router) {

              this.fire.auth.signOut().then(()=>{
                this.router.navigate(['/home']);
              }).catch(()=>{
                this.router.navigate(['/list']);
              })

  }

}
