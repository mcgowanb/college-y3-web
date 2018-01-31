import { VoteComponent } from './vote.component'

describe('VoteComponent', () => {
    let comp : VoteComponent;

    beforeEach(() => {
        comp = new VoteComponent();
    })

    it('should increment votes when upvoted', () => {
        comp.upVote();
        expect(comp.totalVotes).toBe(1);
    })


    it('should decrease votes when downvoted', () => {
        comp.downVote();
        expect(comp.totalVotes).toBe(-1);
    })


})