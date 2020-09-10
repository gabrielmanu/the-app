import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Test } from 'src/app/types/test.interface';
import { Score } from '../../types/score.interface'

import { UserService } from '../../services/user.service';
import { TimerComponent } from 'src/app/timer/timer.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  showMainRating: boolean = true;
  showSelfRating: boolean = false;


  // @ViewChild("vf",{read: ViewContainerRef}) vf: ViewContainerRef;
  test: Test;
  showTimer: boolean = false;

  get userName() {
    return this.userService.user.Name
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private userService: UserService) { }

  ngOnInit(): void {

    // Calculate score

    // input > self testing

    // userService.saveUserTest

    // navigate to > test result path

  }

  
  // create new test

  onContinueClicked(){
    this.showTimer = true;
  }

  onCloseCounterClicked(){
    this.showTimer = false;
  }

  onSubmitBtnClicked(){
    this.showSelfRating = true;
  }
}
