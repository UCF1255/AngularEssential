import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveformComponent } from './responsiveform.component';

describe('ResponsiveformComponent', () => {
  let component: ResponsiveformComponent;
  let fixture: ComponentFixture<ResponsiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
