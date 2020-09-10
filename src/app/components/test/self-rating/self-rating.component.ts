import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-self-rating',
  templateUrl: './self-rating.component.html',
  styleUrls: ['./self-rating.component.scss']
})

export class SelfRatingComponent implements OnInit {

  ratings: string[] = ['1 - Barely Breathing','2 - Manageable', '3 - Easy'];

  constructor() { }

  ngOnInit(): void {
  }

  onSaveBtnClicked(val){
    console.log('difficulty self test', val)
  }


  


}
