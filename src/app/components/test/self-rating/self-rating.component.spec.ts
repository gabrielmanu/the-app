import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfRatingComponent } from './self-rating.component';

describe('SelfRatingComponent', () => {
  let component: SelfRatingComponent;
  let fixture: ComponentFixture<SelfRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
