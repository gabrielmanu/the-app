import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() totalSeconds: number;
  @Output() closeBtnClick: EventEmitter<any> = new EventEmitter<any>();
  // time = this.timerMinutes*60;
  updateInterval: any;
  countdownDisplay: string;
  



  constructor() { }

  ngOnInit(): void {
    // this.countdownDisplay
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInterval)
  }
  


  updateTimerCount() {
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
}
