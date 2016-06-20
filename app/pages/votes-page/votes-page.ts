import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
// import {SelectedFactPage} from '../selected-fact-page/selected-fact-page';
import {Voting} from '../../classes/voting';
import {VotingService} from '../../classes/voting.service';
import {Vote} from '../../classes/vote';

@Component({
  templateUrl: 'build/pages/votes-page/votes-page.html'
})
export class VotesPage implements OnInit {

  voting: Voting;

  constructor(
        private _navController: NavController, 
        private votingService: VotingService) { }

  retrieveVoting() {
    this.votingService.getVoting().then(v => this.voting = v);
    this.voting = this.votingService.getVoting2();
  }
    ngOnInit() {
      this.retrieveVoting();
  }

  selectVote(vote){
    // this._navController.push(SelectedFactPage, {selectedVote: vote})
  }
}
