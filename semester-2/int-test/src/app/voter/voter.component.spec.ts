import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count')).nativeElement as HTMLElement
    expect(de.innerText).toContain('21');
  });

  it('should highlight the upvoted button if i have upoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'))
    expect(de.classes['highlighted']).toBeTruthy();
  })

  it('should call upvote if I click on the up vote buton', () => {
    let btn = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    let spy = spyOn(component, 'upVote').and.stub();
    btn.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  })
});
