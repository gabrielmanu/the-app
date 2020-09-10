import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-rating',
  templateUrl: './main-rating.component.html',
  styleUrls: ['./main-rating.component.scss']
})
export class MainRatingComponent implements OnInit {

  @Output() submitBtnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitBtnClicked(val) {
 
    this.submitBtnClick.emit();
    
    console.log("test score obj", val)

  }
  

}
