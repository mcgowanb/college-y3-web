import { EventEmitter, Output } from "@angular/core";

export class VoteComponent {
    private _totalVotes = 0;
    @Output() voteChanged = new EventEmitter();

    upVote(){
        this._totalVotes++;
        this.voteChanged.emit(this.totalVotes);
    }

    downVote(){
        this._totalVotes--;
        this.voteChanged.emit(this.totalVotes);
    }

    get totalVotes(){
        return this._totalVotes;
    }
}