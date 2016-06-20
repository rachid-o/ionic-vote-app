import { Vote } from './vote';

export class Voting {
    id: number;
    // user_id: string;
    votes: Vote[] = [];

    constructor(_id: number, _votes: Vote[]) {
        this.id = _id;
        this.votes = _votes;
    }
    // get votes():Vote[] {
    //     return this._votes;
    // }
    // set votes(v:Vote[]) {
    //     this._votes = v;
    // }
}