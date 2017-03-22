export class BoardPoint {
    
    /**Поставленный знак */
    Mark: string = "blank";

    /**Признак что точка выбрана */
    private _isSelected:boolean=false;
   
   /**Признак что точка выбрана */
    get IsSelected(): boolean{
        return this._isSelected;
    }

     /**Координаты точки */
    private _horizontal:number;
    
     /**Координаты точки */
    private _vertical:number;
   
    /**Координаты точки */
    get Horizontal(): number
    {
        return this._horizontal;
    };

    /**Координаты точки */
    get Vertical(): number{
        return this._vertical;
    };
    constructor(i: number, j: number) {
        this._horizontal = i;
        this._vertical = j;
    }

    /**Выбор  точки */
    Choose(mark: string) {
        this._isSelected = true;
        this.Mark =mark;
    }
    Clear(){
      this._isSelected=false;
      this.Mark="blank";   
    }
}