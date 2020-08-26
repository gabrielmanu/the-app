import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  @Output() userName: string = '';

  constructor(protected userService: UserService, protected router: Router) { }

  ngOnInit(): void {

    console.log('this.userService.user ', this.userService.user);

    if (this.userService.user) {
      this.router.navigate(['daily-program']);
    }
  }

  onSubmitClick() {
    console.log('userName ', this.userName);
    this.userService.createUser(this.userName);
    this.router.navigate(['test']);
  }

}
