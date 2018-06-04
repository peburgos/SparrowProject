import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }


  backToRoot() {
    this.nav.push('HomeDetalhesPage')
  }  
}
