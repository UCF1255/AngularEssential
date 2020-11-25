import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectComponent } from './behaviorsubject.component';

describe('BehaviorsubjectComponent', () => {
  let component: BehaviorsubjectComponent;
  let fixture: ComponentFixture<BehaviorsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
