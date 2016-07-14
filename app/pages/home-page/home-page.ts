import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VotesPage} from '../votes-page/votes-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
  // templateUrl: 'build/pages/votes-page/votes-page.html'
})
export class HomePage {
  constructor(private _navController: NavController) {
  }

  goToFactsPage(){
    this._navController.push(VotesPage);
  }
}
