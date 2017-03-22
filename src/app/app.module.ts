import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board.component'
import { PointComponent } from './point.component'
import { TicTacProcessorComponent } from './tictacprocessor.component'
import { GameRibbonComponent } from './gameribbon.component'
import { UserProfileComponent } from './user-profile.component'
import { BoardService } from "./board.service";
import { GameService } from "./game.service";
import { LockerService } from "./locker.service";
import { MatrixService } from "./matrix.service";
import { ParticipiantsService } from "./participiants.service";
import { RandomService } from "./random.service";
import { UserService } from "./user.service";
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PointComponent,
    TicTacProcessorComponent,
    GameRibbonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RandomService,  UserService, LockerService, MatrixService, BoardService, GameService, ParticipiantsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
