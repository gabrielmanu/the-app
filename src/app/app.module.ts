import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { TestComponent } from './components/test/test.component';
import { DailyProgramComponent } from './components/daily-program/daily-program.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TimerComponent } from './timer/timer.component';
import { MainRatingComponent } from './components/test/main-rating/main-rating.component';
import { SelfRatingComponent } from './components/test/self-rating/self-rating.component';
import { BasicWorkoutComponent } from './components/daily-program/basic-workout/basic-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    TestComponent,
    DailyProgramComponent,
    UserDetailsComponent,
    TimerComponent,
    SelfRatingComponent,
    MainRatingComponent,
    BasicWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
