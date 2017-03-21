export class BoardPoint{
     Mark:string="blank";
     IsSelected:boolean=false;
     Horizontal:number;
     Vertical:number;
     constructor(i:number, j:number){
         this.Horizontal=i;
         this.Vertical=j;
     }
}