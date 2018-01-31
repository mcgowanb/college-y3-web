import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependComponent } from './depend.component';

describe('DependComponent', () => {
  let component: DependComponent;
  let fixture: ComponentFixture<DependComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
