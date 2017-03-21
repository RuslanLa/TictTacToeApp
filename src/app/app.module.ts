import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {User} from './user'
import {GameStat} from './gamestat'
import {Board} from './board'
import {PointComponent} from './pointcomponent'
@NgModule({
  declarations: [
    AppComponent,
    User,
    GameStat,
    Board,
    PointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
