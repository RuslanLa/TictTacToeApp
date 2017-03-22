import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { BoardPoint } from './boardpoint'
@Component({
  selector: 'board-point',
  templateUrl: './boardpoint.html',
  styleUrls: ['./point.css']
})
export class PointComponent {
  @Input() model: BoardPoint;
  @Output() onChanged = new EventEmitter<BoardPoint>();
 
  clicked(event) {
    this.onChanged.emit(this.model);
  };

}