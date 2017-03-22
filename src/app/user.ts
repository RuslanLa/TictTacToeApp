
/**Пользователь */
export class User {

  /**Проигрыши */
  loses: number = 0;

  /**Победы */
  wins: number = 0;

  /**Всего */
  allcount: number = 0;
  lose() {
    this.loses++;
    this.gameEnd();
  }

  gameEnd() {
    this.allcount++;
  }

  win() {
    this.wins++;
    this.gameEnd();
  }

}