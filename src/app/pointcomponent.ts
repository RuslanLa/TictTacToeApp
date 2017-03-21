import { Component, ViewChild, Input } from '@angular/core';
import {BoardPoint} from './boardpoint'
@Component({
  selector: 'board-point',
  templateUrl: './boardpoint.html',
  styleUrls: ['./point.css']
})
export class PointComponent{
      @Input() model:BoardPoint;
}