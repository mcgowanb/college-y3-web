import { VoteComponent } from './vote.component'; 

describe('VoteComponent123', () => {

  let component: VoteComponent
  beforeEach(() => {
    component = new VoteComponent();
  });


  it('should increase the vote count when I call upvote', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
  it('should decrease the vote count when I call upvote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

  
});