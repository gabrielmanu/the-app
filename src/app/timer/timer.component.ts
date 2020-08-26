import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() totalSeconds: number;

  public closeBtnClick: EventEmitter<any> = new EventEmitter<any>();
  // time = this.timerMinutes*60;




  constructor() { }

  ngOnInit(): void {
  }
  


  updateTimerCount() {
    const updateInterval = setInterval(()=> {

      if (this.totalSeconds <= 0) {
        alert("timer done")
        clearInterval(updateInterval);
        return
      } 
      
      let minutes = Math.floor(this.totalSeconds/60);
      let seconds = this.totalSeconds % 60;

      const countdownDisplayEl= document.getElementById("countdown-display");
      countdownDisplayEl.innerHTML =`${minutes} : ${seconds}`

       this.totalSeconds--;
       
      console.log("increment down")
    },1000)

  }
  onCloseBtnClicked(){
    this.closeBtnClick.emit();
    console.log("close btn was clicked")
  }
}
