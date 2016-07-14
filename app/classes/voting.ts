import { Vote } from './vote';

export class Voting {
    id: number;
    // user_id: string;
    votes: Vote[] = [];

    constructor(_id: number, _votes: Vote[]) {
        this.id = _id;
        this.votes = _votes;
    }
}