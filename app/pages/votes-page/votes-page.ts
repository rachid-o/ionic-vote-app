import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// import {SelectedFactPage} from '../selected-fact-page/selected-fact-page';

@Component({
  templateUrl: 'build/pages/votes-page/votes-page.html'
})
export class VotesPage {

  private votes: string[];
  constructor(private _navController: NavController) { }

  ionViewWillEnter(){
    let _votes = [];
    _votes.push('Free ways - Light Fire');
    _votes.push('Dogs  - Who there.');
    _votes.push('The ant  - Farm Ani');
    _votes.push('Papa Roach - Life');
    _votes.push('Polar bears - Happy');
    this.votes = _votes;
  }

  selectVote(vote){
    // this._navController.push(SelectedFactPage, {selectedVote: vote})
  }
}
