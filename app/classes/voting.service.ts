import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import './in-memory-data.service';
import {Vote} from './vote';
import {Voting} from './voting';


@Injectable()
export class VotingService {
    private _votes:Vote[] = [
        {id:0, track: 'Zero - Day'},
        {id:1, track: 'Free ways - Light Fire'},
        {id:2, track: 'The ant  - Farm Ani'}, 
        {id:3, track: 'Dogs  - Who there'}, 
        {id:4, track: 'Metallica - One'}, 
        {id:5, track: 'Tame Impala - Let it happen'}, 
        {id:6, track: 'HIM - leave'} 
    ];
    
    getVoting(): Promise<Voting> {
        var voting = new Voting(1, this._votes);
        console.log('returning: ', voting);
        return Promise.resolve(voting);
        // return this.http.get(this.heroesUrl)
        //     .toPromise()
        //     .then(response => response.json().data)
        //     .catch(this.handleError);
    }
    // getVoting2(): Voting {
    //     return new Voting(1, this._votes);
    // }

}