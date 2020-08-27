import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Test } from 'src/app/types/test.interface';
import { UserService } from '../../services/user.service';
import { TimerComponent } from 'src/app/timer/timer.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @ViewChild("vf",{read: ViewContainerRef}) vf: ViewContainerRef;
  test: Test;
  showTimer: boolean = false;

  get userName() {
    return this.userService.user.Name
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private userService: UserService) { }

  ngOnInit(): void {

    // TODO: UI counter

    // TODO: if count === 0 > stop test

    // Calculate score

    // input > self testing

    // userService.saveUserTest

    // navigate to > test result path

    // setTimeout()

  }

  
  // create new test

  onStopTest(){

  }

  onContinueClicked(){
    this.showTimer = true;

  }

  onCloseCounterClicked(){
    this.showTimer = false;
  }

}
