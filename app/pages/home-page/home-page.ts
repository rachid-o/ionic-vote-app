import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VotesPage} from '../votes-page/votes-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
  // templateUrl: 'build/pages/votes-page/votes-page.html'
})
export class HomePage implements OnInit {

  constructor(private nav: NavController) {
  }

  goToFactsPage(){
    this.nav.push(VotesPage);
  }

  ngOnInit() {
    this.goToFactsPage();
  }

}
