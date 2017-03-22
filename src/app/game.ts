import { Board } from './board'
import { IParticipiant } from './iparticipant'
import { User } from './user'
import { Player } from './player'
import { TicTacAi } from './tictac_ai'
import { UserService } from "./user.service";
import { BoardService } from "./board.service";
import { ParticipiantsService } from "./participiants.service";
export class Game {
      participiants: IParticipiant[];
      stepsCount: number = 0;
      constructor(private participiantsService:ParticipiantsService) {
            this.participiants = participiantsService.GetParticipiants(this);
      }
      NextStep(board:Board) {
            this.stepsCount++;
            var current = this.GetCurrent();
            current.Step(board);
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