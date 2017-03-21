import { Component, ViewChild } from '@angular/core';
import {PointComponent} from './pointcomponent';
import {BoardPoint} from './boardpoint';
@Component({
  selector: 'board',
  templateUrl: './board.html',
  styleUrls: ['./point.css']
})
export class Board{
     Points:BoardPoint[][];
     ngOnInit(){
         this.Points=[[]];
        //  this.Points=[
        //      [new PointComponent(new BoardPoint(0,0)), new PointComponent(new BoardPoint(0,1)), new PointComponent(new BoardPoint(0,2))],
        //       [new PointComponent(new BoardPoint(1,0)), new PointComponent(new BoardPoint(1,1)), new PointComponent(new BoardPoint(1,2))],
        //       [new PointComponent(new BoardPoint(3,0)), new PointComponent(new BoardPoint(3,1)), new PointComponent(new BoardPoint(3,2))],
        //       ];
         for(var i=0; i<3; i++){
             this.Points[i]=[];
             for(var j=0; j<3; j++){
                 this.Points[i][j]=new BoardPoint(i,j);
             }
         }
     }
}