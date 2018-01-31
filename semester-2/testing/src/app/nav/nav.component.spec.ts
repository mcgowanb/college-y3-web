import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from "@angular/router/testing";


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule.withRoutes([])],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have a link to the todos page', () => {
    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
    let index = des.findIndex(de => de.properties['href'] === '/todos')
    expect(index).toBeGreaterThan(-1);
  })
});
