import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyProgramComponent } from './components/daily-program/daily-program.component';
import { TestComponent } from './components/test/test.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoginComponent } from './components/user-login/user-login.component';


const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },



  { path: 'daily-program', component: DailyProgramComponent },
  { path: 'test', component: TestComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  },
  { path: '**', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
