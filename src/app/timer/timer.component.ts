import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  totalSeconds: number;
  totalSecondsStart: number;
  @Output() closeBtnClick: EventEmitter<any> = new EventEmitter<any>();

  updateInterval: any;
  countdownDisplay: string;
  countdownStarted: boolean = false;
  



  constructor() { }

  ngOnInit(): void {
    // this.countdownDisplay
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInterval)
  }
  
  set totalSecondsInput(seconds: number) {
    this.totalSeconds = seconds;
  }

  updateTimerCount() {
    console.log("this.totalSeconds",this.totalSeconds)
    console.log("this.totalSecondsStart",this.totalSecondsStart)
    this.countdownStarted = true;

    //todo - accept new value for time interval ? (hint: event onChange pe input - resetare totalseconds posibil )

    // this.totalSeconds = this.totalSeconds == undefined ?  this.totalSecondsStart : this.totalSeconds;
    if ( this.totalSeconds == undefined) {
      this.totalSeconds = this.totalSecondsStart
    } 

    clearInterval(this.updateInterval);
    this.updateInterval = setInterval(()=> {

      if (this.totalSeconds <= 0) {
        this.onCloseBtnClicked();
        return
      } 
      
      let minutes = Math.floor(this.totalSeconds/60);
      let seconds = this.totalSeconds % 60;

      this.countdownDisplay =`${minutes} : ${seconds}`
      this.totalSeconds--;
       
      console.log("incrementing down")
    },1000)


  }

  onCloseBtnClicked(){
    clearInterval(this.updateInterval);
    this.countdownDisplay = '';
    this.closeBtnClick.emit();
    console.log("close btn was clicked")
  }

  onPauseBtnClicked(){
    console.log("the pause button was clicked");
    clearInterval(this.updateInterval);
    this.countdownStarted = false;
  }
}
