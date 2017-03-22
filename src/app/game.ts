import { Board } from './board'
import { IParticipiant } from './iparticipant'
import { User } from './user'
import { Player } from './player'
import { Ai } from './ai'
export class Game {
      participiants: IParticipiant[];
      stepsCount: number = 0;
      constructor(user: User, board:Board, userMark:string) {
            var aiMark=userMark==="X"?"O":"X";
            this.participiants = [new Player(user, userMark), new Ai(aiMark, this, board)].sort((a)=>a.Mark=="X"?0:1);
      }
      NextStep() {
            this.stepsCount++;
            var current = this.GetCurrent();
            current.Step();
      }

      Win() {
            var current = this.GetCurrent();
            current.Win();
            var next = this.GetParticipiant(this.stepsCount + 1);
            next.Lose();
      }

      Standoff() {
            var current = this.GetCurrent();
            current.StandOff();
            var next = this.GetParticipiant(this.stepsCount + 1);
            next.StandOff();
      }

      GetCurrent(): IParticipiant {
            return this.GetParticipiant(this.stepsCount)
      }

      GetParticipiant(index: number) {
            return this.participiants[index % this.participiants.length];
      }
}