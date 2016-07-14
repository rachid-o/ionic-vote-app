import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
// import {SelectedFactPage} from '../selected-fact-page/selected-fact-page';
import {Voting} from '../../classes/voting';
import {VotingService} from '../../classes/voting.service';
import {Vote} from '../../classes/vote';
// import { reorderArray } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/votes-page/votes-page.html'
})
export class VotesPage implements OnInit {

  voting: Voting;
  votes: Vote[] = [];

  constructor(
        private _navController: NavController, 
        private votingService: VotingService) { }

  retrieveVoting() {
    this.votingService.getVoting().then(v => {
      this.voting = v
      this.votes = this.voting.votes;
      // console.log('votes set to:', this.votes)
    });
  }

  ngOnInit() {
    this.retrieveVoting();
  }

  removeVote(vote) {
    console.debug("Delete:", vote);
  }
  
  clickVote(vote) {
    console.debug("Clicked on", vote);
  }

  reorderVotes(indexes) {
    console.debug('reorderVotes:', indexes);
    // this.votes = reorderArray(this.votes, indexes);

    // let element = this.votes[indexes.from];
    // this.votes.splice(indexes.from, 1);
    // this.votes.splice(indexes.to, 0, element);
  }
}
