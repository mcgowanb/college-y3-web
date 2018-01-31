import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should emit an event when upvote is called', () => {
    let t = null;
    component.voteChanged.subscribe(tv => {
      t = tv;
    });
    component.upVote();
    expect(t).toBe(1);
  });
});