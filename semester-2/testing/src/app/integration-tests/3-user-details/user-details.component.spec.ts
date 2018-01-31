/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { Observable, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {
  }

}

class ActivatedRouteStub {
  private _subject = new Subject();

  push(value) {
    this._subject.next(value);

  }

  get params(): Observable<any> {
    return this._subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate')
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate user to not found page when invalid user is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate')
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);

    route.push({id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
