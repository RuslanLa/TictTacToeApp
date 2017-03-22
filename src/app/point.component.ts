import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { BoardPoint } from './boardpoint'
@Component({
  selector: 'board-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent {
  @Input() model: BoardPoint;
  @Output() onChanged = new EventEmitter<BoardPoint>();
 
  clicked(event) {
    debugger;
    this.onChanged.emit(this.model);
  };

}