import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRatingComponent } from './main-rating.component';

describe('MainRatingComponent', () => {
  let component: MainRatingComponent;
  let fixture: ComponentFixture<MainRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
