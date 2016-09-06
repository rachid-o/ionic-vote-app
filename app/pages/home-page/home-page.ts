import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VotesPageComponent} from '../votes-page/votes-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  constructor(private nav: NavController) {
  }

  goToFactsPage() {
    this.nav.push(VotesPageComponent);
  }

  ionViewWillEnter() {
    // this.goToFactsPage();
  }

}
