import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/types/test.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  test: Test;

  constructor() { }

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

}
