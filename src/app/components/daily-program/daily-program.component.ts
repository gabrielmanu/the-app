import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-daily-program',
  templateUrl: './daily-program.component.html',
  styleUrls: ['./daily-program.component.scss']
})
export class DailyProgramComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  onClearUserClicked() {
    this.userService.deleteUserFromLocalStorage();
    console.log("user cleared")
  }

  onCloseCounterClicked(){
    console.log('the counter was closed')
  }

}
