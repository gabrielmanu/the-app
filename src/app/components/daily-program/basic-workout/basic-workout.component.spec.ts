import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWorkoutComponent } from './basic-workout.component';

describe('BasicWorkoutComponent', () => {
  let component: BasicWorkoutComponent;
  let fixture: ComponentFixture<BasicWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
