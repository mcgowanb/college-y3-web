import { VoteComponent } from './vote.component'
import { toASCII } from 'punycode';

describe('VoteComponent', () => {
    let comp : VoteComponent;

    beforeEach(() => {
        comp = new VoteComponent();
    })

    it('should raise vote change event when up voted', () => {
        let v = null;
        comp.voteChanged.subscribe(tv => v = tv);
        // spyOn(comp.voteChanged, 'emit');
        comp.upVote();
        expect(v).toBe(1);
        // expect(comp.voteChanged.emit).toHaveBeenCalledWith(1);        
    })
    it('should raise vote change event when down voted', () => {
        spyOn(comp.voteChanged, 'emit');
        comp.downVote();
        expect(comp.voteChanged.emit).toHaveBeenCalledWith(-1);
        
    })



})