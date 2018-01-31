export class VoteComponent {
    private _totalVotes = 0;

    upVote(){
        this._totalVotes++;
    }

    downVote(){
        this._totalVotes--;
    }

    get totalVotes(){
        return this._totalVotes;
    }
}